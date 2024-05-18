import React, { useState, useEffect } from 'react';
import Header from "../../../components/headers/headerJS";
import Footer from "../../../components/footer/footerJS";
import styles from "../../../styles/js/videocourseJS.module.css";

import videoSrc from '../../../images/JS2.mp4';
import { Link } from 'react-router-dom';
import Sidebar from '../../sidebar';

function VideocourseJS2() {
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
                                <h1 className={styles.greetings}>Математические действия в JS</h1>
                                <div className={styles["content-wrapper"]}>
                                    <video controls className={styles.video}>
                                        <source src={videoSrc} type="video/mp4" />
                                        Ваш браузер не поддерживает видео в формате MP4.
                                    </video>
                                </div>
                                <div className={styles.stepButtonsContainer}>
                    <Link to="/course_textJS1" className={styles.stepButton}>
                        Назад
                    </Link>
                    <Link to="/course_textJS2" className={styles.stepButton}>
                        Вперед
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

export default VideocourseJS2;
