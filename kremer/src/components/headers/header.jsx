import styles from '../../styles/headers/header.module.css';
import Logo_img from '../../images/Detmi.png';
import user_img from "../../images/user.png";
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container0}>
                <div className={styles['header__inner']}>
                    {/* Используем NavLink для логотипа */}
                    <NavLink to="/" className={styles.logo}>
                        <img className={styles['logo__img']} src={Logo_img} alt="" />
                    </NavLink>
                    
                    <nav className={styles.menu}>
                        <ul className={styles['menu__list']}>
                            <li className={styles['menu__list-item']}>
                            <NavLink to="/courses" className={styles['menu__list-link']}>Каталог курсов</NavLink>
                            </li>                            
                            <li className={styles['menu__list-item']}>
                                <NavLink to="/tasks" className={styles['menu__list-link']}>Задачи</NavLink>
                            </li>
                            <li className={styles['menu__list-item']}>
                                <NavLink to="/leaderboard" className={styles['menu__list-link']}>Таблица лидеров</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <NavLink to="/personal_account" className={styles.user}>
            <img className={styles['user__img']} src={user_img} alt="User" />
        </NavLink>
                </div>
            </div>
        </header>
    );
}