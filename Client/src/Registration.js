import React from 'react';
import pfp_icon from './img/pfp_icon.svg'

function checkInput(){
    const login = document.getElementById("login-input")
    const password = document.getElementById("password-input")
    const repeatedPassword = document.getElementById("repeat-password-input")
    const errorArea = document.getElementById("error-label")

    if(login.value === "" || password.value === ""|| repeatedPassword.value === "")
        errorArea.innerHTML="Необходимо заполнить все поля!";
    else if(password.value !== repeatedPassword.value)
        errorArea.innerHTML="Пароли не совпадают!";
    else if(password.value.length < 6)
        errorArea.innerHTML="Минимальная длина пароля - 6 символов";
    else
        errorArea.innerHTML="ОК!";
}


function Registration() {
    return (
        <div className="registration-page-container">
            <div className="reg-panel-mobile">
                <div className="input-panel-mobile">
                    <img className="reg-icon" src={pfp_icon} alt={""} />
                    <span className="input-text reg-label">
                        Регистрация учетной записи
                    </span>
                    <span className="input-text reg-sub-label">
                        <i>Заполните поля ниже</i>
                    </span>
                    <div className="input-fields-container">
                        <input id="login-input"  type="text" name="txt" placeholder=" Имя пользователя "/>
                        <input id="password-input" minLength={6} type="password" name="pswd" placeholder=" Пароль"/>
                        <input id="repeat-password-input" minLength={6} type="password" name="pswd" placeholder=" Повтор пароля"/>
                    </div>
                    <div id="error-label"><p></p></div>
                    <button onClick={checkInput} className="create-button-mobile">
                        Создать учетную запись
                    </button>
                    <p className="agreement-mobile">Регистрируя аккаунт, я принимаю условия <a href={"#"}>Пользовательского соглашения </a>
                        и даю своё согласие на обработку моей персональной информации на условиях,
                        определенных <a href={"#"}>Политикой конфиденциальности.</a>
                    </p>
                </div>
            </div>

            <div className="reg-panel">
                <div className="input-panel">
                    <div className="reg-img-container">
                        <img src={pfp_icon} alt={""} />
                    </div>
                    <div className="reg-span-container">
                        <span className={"input-text reg-label"}>
                        Регистрация учетной записи
                        </span>
                        <span className={"input-text"}>
                        Заполните поля ниже
                        </span>
                    </div>
                    <div className="input-fields-container">
                        <input type="text" name="txt" placeholder=" Имя пользователя " required=""/>
                        <input type="password" name="psw" placeholder=" Пароль" required=""/>
                        <input type="password" name="psw" placeholder=" Повтор пароля" required=""/>
                    </div>
                    <div className="reg-button-container">
                        <button>Создать аккаунт</button>
                    </div>
                    <div className="reg-agreement">
                        Регистрируя аккаунт, я принимаю условия <a href={"#"}>Пользовательского соглашения </a>
                         и даю своё согласие на обработку моей персональной информации на условиях,
                        определенных <a href={"#"}>Политикой конфиденциальности.</a>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="reg-text-container">
                    <p className="reg-aside-product-name">
                        HEART CIRCUIT
                    </p>
                    <p>
                        Heart Circuit – это бесплатный веб-сервис позволяющий
                        сегментировать медицинские изображения. Используя алгоритмы нейронных сетей,
                        сервис позволяет обрабатывать снимки различной сложности.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Registration;
