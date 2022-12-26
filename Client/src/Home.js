import pfp_icon from "./img/pfp_icon.svg";
import React from "react";
import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom";

function Home() {
    // const history=useHistory()
    // function redirect(){
    //     history.push("/registration")
    //     this.forceUpdate()
    // }

    return (
        <div className="home_base">
            <div className="home-mobile" >
                <div className="text-label-mobile">
                    HEART <br/> <span className="label-part">CIRCUIT</span>
                </div>
                <div className="text-info-mobile">
                    <p className="text-content-mobile">
                        Heart Circuit – это бесплатный веб-сервис позволяющий
                        сегментировать медицинские изображения. Используя алгоритмы нейронных сетей,
                        сервис позволяет обрабатывать снимки различной сложности.
                    </p>
                    <p className="text-content-mobile">
                        <br/>Нейронная сеть использует алгоритм Лукаса – Канаде
                        и различные методы вычисления оптического потока,
                        что позволяет добиться высокого качества получаемого результата.
                    </p>
                </div>
            </div>

            <div className="home">
                <div className="text-container">
                    <div className="text-label">
                        HEART <br/> <span className="label-part">CIRCUIT</span>
                    </div>
                    <div className="text-info">
                        <p className="text-content-1">
                            Heart Circuit – это бесплатный веб-сервис позволяющий
                            сегментировать медицинские изображения. Используя алгоритмы нейронных сетей,
                            сервис позволяет обрабатывать снимки различной сложности.
                        </p>
                        <p className="text-content-2">
                            Нейронная сеть использует алгоритм Лукаса – Канаде
                            и различные методы вычисления оптического потока,
                            что позволяет добиться высокого качества получаемого результата. <span className="start-anchor"><a href="#drop-area">Начать сейчас</a></span>
                        </p>
                    </div>
                </div>
                <div className="entrance-container">
                    <div className="entrance-panel">
                        <img className="entrance-pfp" src={pfp_icon} alt={"profile-picture"}/>
                        <p className="entrance-label">Войти в учетную запись</p>
                        <div className="entrance-fields">
                            <input type="text" name="txt" placeholder="Имя пользователя" required=""/>
                            <input type="password" name="psw" placeholder="Пароль" required=""/>
                        </div>
                        <button className="entrance-button">ВОЙТИ</button>
                        <div className="anc-container">
                            <p className="forget-password"> Нет аккаунта?</p>
                            <a onClick={() => {window.location.href="/registration"}} color="black"> Зарегистрируйтесь сейчас </a>
                        </div>
                    </div>
                </div>
                {/*<img className="png-container" src={heart_img} alt={""}/>*/}
            </div>
        </div>
    );
}
export default Home;