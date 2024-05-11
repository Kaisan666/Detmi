//import React from 'react';
import React from 'react';
import "../styles/registration.css"; // Импорт файла со стилями
import User1_img from "../images/user1.png";
import Detmi_img from "../images/Detmi.png";
/* existing imports */


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
                        <label htmlFor="username">Имя пользователя:</label>
                        <input type="text" id="username" name="username" required autoComplete="username" />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required autoComplete="email" />

                        <label htmlFor="password">Пароль:</label>
                        <input type="password" id="password" name="password" required autoComplete="new-password" />

                        <button type="submit" id="registerButton">Зарегистрироваться</button>
                    </form>
                    <p className="login-link">Уже зарегистрированы? <a href="/login" className="login-anchor">Войти</a></p>
                
                </div>
            </div>
        </div>
    );
}

export default Registration;
