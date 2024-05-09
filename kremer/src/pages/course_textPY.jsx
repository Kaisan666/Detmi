import React from 'react';
import Header from "../components/headerPY";
import Footer from "../components/footerPY";
import "../styles/course_textPY.css";
//import o_img from "../images/0.png";
//import pc_img from "../images/1.png";
import arrow1_img from "../images/arrow1.png";


function Course_textPY() {
    return (
        <div>
            <Header />
            <div className="button_menu">
                                    <img src={arrow1_img} alt="" className="arrow1_img" />
                                </div>
              <div className="centered-text">
                 <p><strong>ЧИСЛА И ОПЕРАЦИИ НАД НИМИ</strong></p>
                   <p>
                    Добро пожаловать на курс "Python". Сегодня мы поговорим о числах и операциях
                     над ними в Python. Python поддерживает различные типы чисел, такие как целые числа (int),
                      числа с плавающей запятой (float) и комплексные числа. Давайте рассмотрим основные 
                      операции, которые можно выполнять над этими числами.
                    </p>
        <pre>
                a = 5
                b = 3
                print(a + b)
        </pre>
        <pre>
              c = 3.14
              d = 2.718 
         </pre>
              
        <p>Теперь давайте посмотрим на операции, которые можно выполнять над этими числами:</p>
        
        <ul>
                <li>Сложение (+) и Вычитание (-):
                    <pre>
                                            
                    result_sum = a + b
                    result_diff = c - d
                        
                    </pre>
                </li>

                <li>Умножение (*) и Деление (/):
                    <pre>
                                            
                    result_mult = a * c
                    result_div = b / d
                        
                    </pre>
                </li>

                <li>Целочисленное деление (//) и Остаток от деления (%):
                    <pre>
                                            
                    result_floor_div = a // b
                    result_modulo = a % b
                        
                    </pre>
                </li>

                <li>Возведение в степень () и Квадратный корень (math.sqrt()):
                    <pre>
                        
                    import math

                    result_power = a ** 2
                    result_sqrt = math.sqrt(b)
                        
                    </pre>
                </li>
            </ul>
            <p>Это лишь малая часть операций, которые можно выполнять над числами в Python. Помните, что Python также предоставляет множество встроенных функций для работы с числами.</p>

            <a href="pdf/python1.pdf" download>Скачать материал</a>
                </div>
             <div className="step-buttons-container">
                   <button className="step-button">Назад</button>
                  <button className="step-button">Вперед</button>
             </div>
            <Footer />
        </div>
        
    );
}
 
export default Course_textPY;
