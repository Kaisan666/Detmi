import '../styles/style_for_main.css'
// import React from 'react'
import Logo_img from '../images/Detmi.png';
import user_img from "../images/user.png"
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="container0">
                <div className="header__inner">
                    {/* Используем NavLink для логотипа */}
                    <NavLink to="/" className="logo">
                        <img className="logo__img" src={Logo_img} alt="" />
                    </NavLink>
                    
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <a href="#" className="menu__list-link">Каталог курсов</a>
                                <ul className="submenu">
                                    <li><a href="#">PYTHON</a></li>
                                    <li><a href="#">JavaScript</a></li>
                                    <li><a href="#">С++</a></li>
                                </ul>
                            </li>                            
                            <li className="menu__list-item">
                            <NavLink to="/tasks" className="menu__list-link">Задачи</NavLink>
                            </li>
                            <li className="menu__list-item">
                                <NavLink to="/leaders" className="menu__list-link">Таблица лидеров</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <a href="#" className="user">
                        <img className="user__img" src={user_img} alt="" />
                    </a>
                </div>
            </div>
        </header>
    );
}
