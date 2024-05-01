import React from 'react';
import Header from "../components/headerPY";
import Footer from "../components/footerPY";
import "../styles/videocoursePY.css"; // Импорт файла со стилями
//import o_img from "../images/0.png";
//import pc_img from "../images/1.png";
import arrow1_img from "../images/arrow1.png";
import python from "../images/python.mp4"

function VideocoursePY() {
    return (
        <div>
            <Header />
            <main className="main">
                <section className="top">
                    <div className="container1">
                        <div className="top__wrapper">
                            <div className="zaeb">
                                <div className="button_menu">
                                    <img src={arrow1_img} alt="" className="arrow1_img" />
                                </div>
                                <h1 className="greetings">ВВЕДЕНИЕ В КУРС</h1>
                                <div className="content-wrapper">
                                    <video controls className="video">
                                        <source src={python} type="video/mp4" />
                                        Ваш браузер не поддерживает видео в формате MP4.
                                    </video>
                                </div>
                                <div className="step-buttons-container">
                                        <button className="step-button">Шаг назад</button>
                                        <button className="step-button">Шаг вперед</button>
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
