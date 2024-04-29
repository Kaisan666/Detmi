import React from 'react';
import Header from "../components/headerPY";
import Footer from "../components/footer";
import "../styles/videocourse.css"; // Импорт файла со стилями
import o_img from "../images/0.png";
import pc_img from "../images/1.png";
import arrow1_img from "../images/arrow1.png";
import python from "../images/python.mp4"

function Videocourse() {
    return (
        <div>
               <Header/>
            <main className="main">
                {/* <nav className="aside-menu">
                    <ul></ul>
                </nav> */}
                <section className="top">
                    <div className="container1">
                        <div className="top__wrapper">
                            <div className="zaeb">
                                <div className="button_menu">
                                    <img src={arrow1_img} alt="" className="arrow1_img" />
                                </div>
                                <h1 className="greetings">Введение в курс</h1>
                                <div className="content-wrapper">
                                    <div className="fon1">
                                        <img className="fon1__img" src={pc_img} alt="" />
                                    </div>
                                      <video controls className="video">
                                    <source src={python} type="video/mp4" />
                                    Ваш браузер не поддерживает видео в формате MP4.
                                    </video>

                                    <div className="fon">
                                        <img className="fon__img" src={o_img} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default Videocourse;
