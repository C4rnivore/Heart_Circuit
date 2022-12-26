import torch
import numpy as np
from tqdm import tqdm
from neir2.neir import mUNet
from neir2.lv import area2cont, get_contour_points, interpolate_contour
from skimage.io import imread
from skimage.transform import resize
from skimage import measure
from skimage.color import rgb2hsv
import os


# file_names = os.listdir('images')
# file_names.sort()
# imgs = [imread(os.path.join('images', file_name),as_gray=True) for file_name in file_names]

def use_ai(files):
    imgs = [imread(file_name, as_gray=True) for file_name in files]
    device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
    model = mUNet(in_channels=1, out_channels=1, dropout=0.0).to(device)
    model.load_state_dict(torch.load('neir2/modified_unet.pth'))
    model.eval();
    pred_points = []
    for img in tqdm(imgs, total=len(imgs)):
        out = model(
            torch.tensor(resize(img, (512, 512), preserve_range=True, order=1)).unsqueeze(0).unsqueeze(0).float())
        msk = resize(torch.sigmoid(out).squeeze().detach().numpy(), img.shape)
        msk = msk > 0.1
        labels = measure.label(msk, connectivity=1)
        label = 0
        max_count = 0
        for lbl in range(1, np.max(labels)):
            count = np.sum(labels == lbl)
            if count > max_count:
                label = lbl
                max_count = count
        msk = labels == label
        x, y, x_orig, y_orig = get_contour_points(msk, kind='contour', num=9)
        pred_points.append((x, y))
        with open('results_cnn.txt', 'w') as f:
            for i, points in enumerate(pred_points):
                for x, y in zip(points[0], points[1]):
                    f.write('{:.2f} {:.2f} '.format(x, y))
                f.write('\n')
