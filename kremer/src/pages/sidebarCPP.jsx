// Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/sidebar.module.css";

function SidebarCPP() {
    return (
        <div className={styles.sidebar}>
            <h3></h3>
            <ul>
                <li>
                    <Link to="/videocourseCPP">Введение в курс</Link>
                </li>
                <li>
                    <Link to="/videocourseCPP1">Переменные и типы данных в C++</Link>
                </li>
                <li>
                    <Link to="/course_textC">Переменные и типы данных в С++ - конспект</Link>
                </li>
                <li>
                    <Link to="/1_1cpp">Задание №1</Link>
                </li>
                <li>
                    <Link to="/1_2cpp">Задание №2</Link>
                </li>
                <li>
                    <Link to="/videocourseCPP2">Условные конструкции в С++</Link>
                </li>
                <li>
                    <Link to="/course_textC1">СЛОЖНЫЕ КОНСТРУКЦИИ. ОПЕРАТОРЫ IF-ELSE, SWITCH-CASE - конспект</Link>
                </li>
                <li>
                    <Link to="/2_1cpp">Задание №1</Link>
                </li>
                <li>
                    <Link to="/2_2cpp">Задание №2</Link>
                </li>
            </ul>
        </div>
    );
}

export default SidebarCPP;
