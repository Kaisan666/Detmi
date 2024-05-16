import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/python/python_introduce.module.css';

export default function AsideIntro(props) {
    return (
        <aside className={styles['aside-right']} id="asidee">
            <div className={styles['aside-stiky-wrapper']}>
                <div className={styles['button__wrapper']}>
                    <Link to="/videocoursePY" className={styles['button__link']}>
                        <button 
                            className={styles['button__link-to-course']} 
                            type="button" 
                            id="button__course"
                        >
                            Записаться!
                        </button>
                    </Link>
                </div>
                <div className={styles['aside-right__main']}>
                    <h4 className={styles['aside-right__title']}>В данном курсе:</h4>
                    <ul className={styles['aside-right__list']}>
                        <li className={styles['aside-right__list-item']}>100500 уроков</li>
                        <li className={styles['aside-right__list-item']}>Миллион тестов</li>
                        <li className={styles['aside-right__list-item']}>Тысячи задач</li>
                    </ul>
                    <span className={styles['aside-right__bottom1']}>
                        Примерное время прохождения курса
                    </span>
                    <span className={styles['aside-right__bottom2']}> 50 часов</span>
                </div>
            </div>
        </aside>
    );
}
