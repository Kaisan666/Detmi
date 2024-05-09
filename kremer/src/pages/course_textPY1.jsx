import React from 'react';
import Header from "../components/headerPY";
import Footer from "../components/footerPY";
import "../styles/course_textPY.css";

import pdf from "../images/Python1.pdf";
//import programmers_img from "../images/programmers.png";
import arrow1_img from "../images/arrow1.png";


function Course_textPY1() {
    return (
        <div>
            <Header />
            <div className="button_menu">
                                    <img src={arrow1_img} alt="" className="arrow1_img" />
                                </div>
           
              <div className="centered-text">
                 <p><strong>ПЕРЕМЕННЫЕ И ТИПЫ ДАННЫХ PYTHON</strong></p>
                   <p>
                   Переменная в Python - это имя, которое связывается с объектом (значением)
                    в памяти компьютера. В Python переменные не требуют объявления 
                    типа данных; тип данных определяется автоматически при присваивании 
                    значения переменной.
                    </p>
        
        <pre>x = 5  # x является целым числом (int)</pre>
        <pre> name = "Alice"  # name является строкой (str)</pre>
        <pre>is_student = True  # is_student является логическим значением (bool)</pre>
        <pre> my_list = [1, 2, 3]  # my_list является списком (list)</pre>
        <pre>my_dict = {"key value"}  # my_dict является словарем (dict)
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
            <div src={pdf} className="pdf">
            <a href="/Python1.pdf" download>
      Скачать материал
    </a>
            </div>
                </div>
             <div className="step-buttons-container">
                   <button className="step-button">Назад</button>
                  <button className="step-button">Вперед</button>
             </div>
            
            <Footer />
        </div>
        
    );
}
 
export default Course_textPY1;
