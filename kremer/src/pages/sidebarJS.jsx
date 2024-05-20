// Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/sidebar.module.css";

function SidebarJs() {
    return (
        <div className={styles.sidebar}>
            <h3></h3>
            <ul>
                <li>
                    <Link to="/videocourseJS">Введение в курс</Link>
                </li>
                <li>
                    <Link to="/videocourseJS1">Переменные и типы данных в JavaScript</Link>
                </li>
                <li>
                    <Link to="/course_textJS1">Переменные и типы данных в JavaScript - конспект</Link>
                </li>
                <li>
                    <Link to="/1_1js">Задание №1</Link>
                </li>
                <li>
                    <Link to="/1_2js">Задание №2</Link>
                </li>
                <li>
                    <Link to="/1_3js">Задание №3</Link>
                </li>
                <li>
                    <Link to="/videocourseJS2">Математические операции</Link>
                </li>
                <li>
                    <Link to="/course_textJS2">ПЕРЕМЕННЫЕ И ТИПЫ ДАННЫХ PYTHON</Link>
                </li>
                <li>
                    <Link to="/2_1js">Задание №1</Link>
                </li>
                <li>
                    <Link to="/2_2js">Задание №2</Link>
                </li>
            </ul>
        </div>
    );
}

export default SidebarJs;
