import React, { useState, useEffect } from 'react';
import Header from "../../../components/headers/headerJS";
import Footer from "../../../components/footer/footerJS";
import styles from "../../../styles/js/videocourseJS.module.css";

import videoSrc from '../../../images/JS1.mp4';
import { Link } from 'react-router-dom';
import Sidebar from '../../sidebar';

function VideocourseJS1() {
    const [isPanelOpen, setPanelOpen] = useState(false);

    useEffect(() => {
        // Добавляем класс к body при монтировании компонента
        document.body.classList.add(styles.bodyGreenBackground);

        // Удаляем класс из body при размонтировании компонента
        return () => {
            document.body.classList.remove(styles.bodyGreenBackground);
        };
    }, []);

    const togglePanel = () => {
        setPanelOpen(!isPanelOpen);
    };

    return (
        <div>
            <Header />
           
            <main className={styles.main}>
                <section className={styles.top}>
                    <div className={styles.container1}>
                        <div className={styles.top__wrapper}>
                            <div className={styles.zaeb}>
                                <h1 className={styles.greetings}>Переменные и типы данных в JS</h1>
                                <div className={styles["content-wrapper"]}>
                                    <video controls className={styles.video}>
                                        <source src={videoSrc} type="video/mp4" />
                                        Ваш браузер не поддерживает видео в формате MP4.
                                    </video>
                                </div>
                                <div className={styles["step-buttons-container"]}>
                                    <Link to='/videocourseJS'>
                                    <button className={styles["step-button"]}>Назад</button>
                                    </Link>
                                    
                                    <Link to="/course_textJS1">
                                        <button className={styles["step-button"]}>Далее</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default VideocourseJS1;
