import React from 'react';
import styles from "../styles/registration.module.css"; // Импорт файла со стилями

import User1_img from "../images/user1.png";
import Detmi_img from "../images/Detmi.png";

function Registration() {
    return (
        <div>
            <div className={styles.container}>
                <a href="#" className={styles.User1}>
                    <img src={User1_img} alt="" className={styles.user1_img} />
                </a>
                <div className={styles['register-box']}>
                    <img src={Detmi_img} alt="" className={styles.Detmi_img} />
                    <h2>Регистрация</h2>
                    <form>
                        <label htmlFor="username">Имя пользователя:</label>
                        <input type="text" id="username" name="username" required autoComplete="username" />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required autoComplete="email" />

                        <label htmlFor="password">Пароль:</label>
                        <input type="password" id="password" name="password" required autoComplete="new-password" />

                        <a href="/" className={styles.registerButton}>Зарегистрироваться</a>
                    </form>
                    <p className={styles['login-link']}>Уже зарегистрированы? <a href="/login" className={styles['login-anchor']}>Войти</a></p>
                </div>
            </div>
        </div>
    );
}

export default Registration;
