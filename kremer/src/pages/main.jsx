import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/style_for_main.css"
import Programmer_img from "../images/programmer.png"
import Languages_img from "../images/languages.png"
import top2_img from "../images/4.png"

function MainPage() {
    return (
    <div>
        <Header/>
        <div>
        <div className="width-wrapper"> 
        <main className="main">
         <section className="top">
            <div className="container1">
                <div className="top__wrapper">
                <div className="zaeb">
                    <div className="section_1_item-1">
                        <h1 className="section_1_text-1">
                            ПРИСОЕДИНЯЙТЕСЬ К НАМ И ОТКРОЙТЕ ДЛЯ СЕБЯ НОВЫЕ ГОРИЗОНТЫ ВОЗМОЖНОСТЕЙ
                            ГДЕ ТОЛЬКО ВАША ФАНТАЗИЯ СТАВИТ ПРЕДЕЛЫ
                        </h1>
                    </div>
                   
                        <div className="section_1_item-2-wrapper">
                            <img src={Languages_img} alt="" className="languages_img"/>
                    <div className="section_1_item-2">
                            <h2 className="section_1_text-2">
                                Здесь вы найдете все, что нужно для того, чтобы стать профессионалом в мире технологий.
                                Мы предлагаем обучение с нуля для новичков и углубленную программу для тех,
                                кто уже имеет опыт в программировании.
                            </h2>
                        </div>
                    </div>
                    <div className="section_1_item-3">
                        <a className="section_1_item-3_link" href="#">
                            Узнать подробнее
                        </a>
                    </div>
            </div>
            
            <div className="top__img-wrapper">
            <img src={Programmer_img} alt="" className="top__img"/>
            </div>
        </div>
        </div>
         </section>
         <section className="top2">
            <div className="container">
                <div className="top2__wrapper">
                        <div className="section_2_item-1">
                            <div className="section_2_item_1_img">
                                <h3 className="section_2_item_1">
                                    НАШИ КУРСЫ
                                </h3>
                                  <img src={top2_img} alt="" className="top1__img"/>
                            </div>
                        </div>
                        <div className="help">
                        <div className="box1">
                            <div className="text">PYTHON</div>
                        </div>
                        <div className="box2">
                            <div className="text">JavaScript</div>
                        </div>
                        <div className="box3">
                            <div className="text">С++</div>
                        </div>
                      </div>
                </div>
            </div>
        </section>
        
         <section className="top3">
            <div className=" container3">
                <div className="top3__wrapper">
                    <div className="kek">
                        <div className="section_3_item-1">
                            <h4 className="section_3_item_1">
                                ЧТО ВАС ЖДЕТ?
                            </h4>
                        </div>
                </div>
                    <div className="container3">
                        <div className="top2__img-wrapper">
                            <img src="images/7.png" alt="" className="top7__img"/>
                            </div>
                       <div className="box4">
                            <div className="text">Интерейснейшие курсы по языкам программирования на выбор, на данный момент доступны такие языки как:
                             Python, C++ и JavaScript. Курсы состоят из разделов, к каждому разделу подготовлен
                              видео-ролик для ознакомления с основными аспектами и понятиями, а также краткий
                               конспект для повторения материала. В завершении каждого раздела  ожидаютс
                               я практические и теоретические задания для закрепления полученных знаний
                            </div>
                      </div>
                      <div className="container4">
                      <div className="top2__img-wrapper">
                        <img src="images/1.png" alt="" className="top4__img"/>
                     </div>
                    <div className="top2__img-wrapper">
                        <img src="images/2.png" alt="" className="top5__img"/>
                    </div>
                    <div className="top2__img-wrapper">
                        <img src="images/3.png" alt="" className="top6__img"/>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    
         </section>
               <section className="top4">
                <div className="container5">
                    <div className="top4__wrapper">
                        <div className="lol">
                            <div className="section_4_item-1">
                                <h5 className="section_4_item_1">
                                    ЗАДАЧИ
                                </h5>
                            </div>
                            <div className="container6">
                                <img src="images/8.png" alt="" className="top8__img"/>
                           
                            <div className="box5">
                                <div className="text">
                                    <strong><p>Раздел “Задачи” - Ваш путь к успеху!</p></strong>
                                    <h2>В разделе “Задачи” будут две категории, “обычный” и “соревновательный”.
                                    Вас ждут три уровня сложности - легкий, средний и жесткий!
                                    Здесь вы сможете прокачать свой навык, решая множество интересных и разнообразных задач,
                                    а также получить рейтинг, тем самым став лучшим в таблице лидеров, заняв первое место!</h2>
                          </div>
                        </div>
                        </div>    
                        </div>    
                    </div>
                </div>
               </section>
               <section className="top5">
                <div className="container7">
                    <div className="top5__wrapper">
                        <div className="pyk">
                            <div className="section_5_item-1">
                                <h5 className="section_5_item_1">
                                    ЛИДЕРЫ КУРСА
                                </h5>
                            </div>
                        </div>
                        <div className="container7">
                            <div className="box6">
                                <div className="text">В таблицу лидеров курса попадают только те, 
                                    кто набрал большее количество рейтинга. </div>
                            </div>
                            <div className="box7">
                                <div className="text">Задачи могут быть самыми разными 
                                    - от простых до сложных</div>
                            </div>
                            <div className="box8">
                                <div className="text">Каждый участник курса имеет шанс занять первое место в этой таблице. 
                                    Это стимул для всех , 
                                    ведь победа в таблице лидеров означает признание их мастерства и знаний.</div>
                            </div>
                            <div className="box9">
                                <div className="text">Но именно преодоление этих испытаний позволяет участникам 
                                    продемонстрировать свое мастерство и стать лидером.</div>
                            </div>
                            <div className="box10">
                                <div className="text">Чтобы достичь вершины, вам придется приложить немало усилий
                                     и потратить немало времени на решение разнообразных задач.</div>
                            </div>
                        </div>
                    </div>
                </div>
               </section>
        
        </main>
        </div>
        </div>
        <Footer/>
    </div>
    )
}
export default MainPage