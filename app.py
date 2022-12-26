from flask import *
from datetime import datetime
from neir2.main import use_ai
from flask import send_file
from os import path

app = Flask(__name__)


@app.route('/', methods=['POST', 'GET'])
def members():
    if request.method == 'POST':
        if 'upload' not in request.files:
            return redirect(request.url)
        files = request.files.getlist('upload')

        use_ai(files)
        return redirect(url_for("downloadFile"))
    return render_template("index.html")


@app.route('/download', methods=['GET', 'POST'])
def downloadFile():
    if request.method == 'POST':
        path = "C:/Heart Circuit/"
        return send_from_directory(path, "results_cnn.txt", as_attachment=True)
    return render_template('download.html')


if __name__ == '__main__':
    app.run(debug=True)
