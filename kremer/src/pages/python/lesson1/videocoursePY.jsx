import React, { useState } from 'react';
import Header from "../../../components/headerPY";
import Footer from "../../../components/footerPY";
import styles from "../../../styles/python/VideocoursePY.module.css"; 
import python from "../../../images/python.mp4";
import { Link } from 'react-router-dom';

function VideocoursePY() {
    const [isPanelOpen, setPanelOpen] = useState(false);

    const togglePanel = () => {
        setPanelOpen(!isPanelOpen);
    };

    return (
        <div>
            <Header />
            <button onClick={togglePanel} className={styles["panel-toggle-button"]}>
                {isPanelOpen ? 'Скрыть панель' : 'Показать панель'}
            </button>
            
            {isPanelOpen && (
    <div className={styles.panel}>
        <a>ВВЕДЕНИЕ В КУРС</a>
        <hr /> {/* Горизонтальная линия */}
        <a> Базовые операции в языке Python</a>
        <hr /> {/* Горизонтальная линия */}
        <a> Краткая теория</a>
        <hr /> {/* Горизонтальная линия */}
        <a> Задачи</a>
        <hr /> {/* Горизонтальная линия */}
        <a>Переменные и типы данных Python</a>
        <hr /> {/* Горизонтальная линия */}
        <a> Краткая теория</a>
        <hr /> {/* Горизонтальная линия */}
        <a> Задачи</a>
        <hr /> {/* Горизонтальная линия */}
    </div>
)}

            <main className={styles.main}>
                
            
                <section className={styles.top}>
                    <div className={styles.container1}>
                        <div className={styles.top__wrapper}>
                            <div className={styles.zaeb}>
                                
                                <h1 className={styles.greetings}>ВВЕДЕНИЕ В КУРС</h1>
                                
                                <div className={styles["content-wrapper"]}>
                            
                                    <video controls className={styles.video}>
                                        <source src={python} type="video/mp4" />
                                        Ваш браузер не поддерживает видео в формате MP4.
                                    </video>
                                </div>
                                <div className={styles["step-buttons-container"]}>
                                    <button className={styles["step-button"]}>Назад</button> {/* будет вести на стр с инфой про курс????*/}

                                    <Link to="/videocoursePY1">
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

export default VideocoursePY;
