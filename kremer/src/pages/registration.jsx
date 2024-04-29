//import React from 'react';
import "../styles/registration.css"; // Импорт файла со стилями
import User1_img from "../images/user1.png";
import Detmi_img from "../images/Detmi.png";

function Registration() {
    return (
        <div>
            <div className="container">
                <a href="#" className="User1">
                    <img src={User1_img} alt="" className="user1_img" />
                </a>
                <div className="register-box">
                <img src={Detmi_img} alt="" className="Detmi_img" />
                    <h2>Регистрация</h2>
                    <form>
                        <label htmlFor="usersname">Имя пользователя:</label>
                        <input type="text" id="username" name="username" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="password">Пароль:</label>
                        <input type="password" id="password" name="password" required />

                        <button type="submit" id="registerButton">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registration;
