import React from 'react';
import pfp_icon from './img/pfp_icon.svg'

function Entrance(props) {
    return (
        <div className='entrance-container-page'>
            <div className="entrance-log-panel">
                <div className="entrance-input-panel">
                    <img className="entrance-pfp-icon" src={pfp_icon} alt="img"/>
                    <span className="entrance-log-label">Вход в аккаунт</span>
                    <span className="entrance-input-text">Заполните поля ниже:</span>
                    <div className="entrance-input-fields-container">
                        <input type="text" name="txt" placeholder="Имя пользователя" required=""/>
                        <input type="password" name="psw" placeholder="Пароль" required=""/>
                    </div>
                    <a href="#" className="entrance-forget-psw">Забыли пароль?</a>
                    <button className="entrance-create-button">Войти</button>
                    <p className="entrance-no-acc">Нет аккаунта?<a onClick={() => {window.location.href="/registration"}}> Зарегистрироваться </a></p>
                </div>
            </div>
            <div className="entrance-log-info">
                <div className="entrance-log-text-container">
                    <p className="entrance-log-aside-product-name">HEART CIRCUIT</p>
                    <p className="entrance-log-aside-product-txt">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum."
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Entrance;