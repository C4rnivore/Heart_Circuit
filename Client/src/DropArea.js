import {useState,useEffect} from "react";


function DropArea() {
    const [drag, setDrag] = useState(false)

    function dragStartHandler(e){
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e){
        e.preventDefault()
        setDrag(false)
    }

    function onDropHandler(e){
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        console.log(files)
        setDrag(false)
    }

    return (
        <div id="drop-area" className="drop">
            <div className='dropZone'>
                {drag
                    ? <div className='drag-area'
                           onDragStart={e => dragStartHandler(e)}
                           onDragLeave={e => dragLeaveHandler(e)}
                           onDragOver={e => dragStartHandler(e)}
                           onDrop={e => onDropHandler(e)}
                    >Отпустите файлы</div>
                    :
                    <div className = 'drop-to-area'
                         onDragStart={e => dragStartHandler(e)}
                         onDragLeave={e => dragLeaveHandler(e)}
                         onDragOver={e => dragStartHandler(e)}
                    ><p>
                        Перенесите файлы сюда <br/>
                        <span>
                            и мы обработаем их для вас
                        </span>
                    </p>
                    </div>
                }
            </div>

            <p> или </p>

            <form  method="post" name="upfiles" encType="multipart/form-data">
                <div className="browse-button">
                    <input type="file" id="file" name="upload" multiple accept={"image/*"}/>
                    <input className="submit-btn" type="submit" id="submit-btn" />
                    <label htmlFor="file"> Выберете файлы для загрузки </label>
                </div>
            </form>
        </div>
    );
}

export default DropArea;