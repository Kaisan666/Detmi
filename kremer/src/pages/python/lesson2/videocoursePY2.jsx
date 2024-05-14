import React from 'react';
import Header from "../../../components/headerPY";
import Footer from "../../../components/footerPY";
import styles from "../../../styles/python/VideocoursePY.module.css";
// import "../styles/videocoursePY.css"; // Импорт файла со стилями
//import o_img from "../images/0.png";
//import pc_img from "../images/1.png";
import arrow1_img from "../../../images/arrow1.png";
import python from "../../../images/python2.mp4"
import { Link } from 'react-router-dom';

function VideocoursePY2() {
    return (
        <div>
            <Header />
            <main className={styles["main"]}>
                <section className={styles["top"]}>
                    <div className={styles["container1"]}>
                        <div className={styles["top__wrapper"]}>
                            <div className={styles["zaeb"]}>
                                <div className={styles["button_menu"]}>
                                    <img src={arrow1_img} alt="" className={styles["arrow1_img"]} />
                                </div>
                                <h1 className={styles["greetings"]}> Переменные и типы данных Python</h1>
                                <div className={styles["content-wrapper"]}>
                                    <video controls className={styles["video"]}>
                                        <source src={python} type="video/mp4" />
                                        Ваш браузер не поддерживает видео в формате MP4.
                                    </video>
                                </div>
                                <div className={styles["step-buttons-container"]}>
                                        <Link to="/course_textPY">
                                           <button className={styles["step-button"]}>Шаг назад</button>
                                        </Link>
                                        <Link to="/course_textPY1">
                                           <button className={styles["step-button"]}>Шаг вперед</button>
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

export default VideocoursePY2;
