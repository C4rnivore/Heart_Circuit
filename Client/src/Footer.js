import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-logo">
                2022 TEST NAME
                <a>Privacy policy</a>
            </div>
            <div className="footer-content">
                <div><Link to="/">На главную</Link></div>
                <div><a href="#">О нас</a></div>
                <div><a href="#">Контакты</a></div>
            </div>
        </div>
    );
}

export default Footer;