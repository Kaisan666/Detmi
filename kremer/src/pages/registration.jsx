
import User2_img from "../images/user2.png"
import Detmi_img from "../images/Detmi.png"
import " ../styles/registration.css"



function Registration() {
    return (
        <div>
            <a href="#" className="user2">
                <img src={User2_img} alt="" className="user2_img" />
            </a>
            <div className="container">
                <a href="#" className="user2">
                    <img src={Detmi_img} alt="" className="Detmi_img" />
                </a>
                <div className="register-box">
                    <h2>Регистрация</h2>
                    <form>
                        <label htmlFor="username">Имя пользователя:</label>
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
    )
}
export default Registration