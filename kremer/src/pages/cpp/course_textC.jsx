import React from 'react';

import "../styles/course_textC.css";

import pdf from "../images/Python1.pdf";
//import programmers_img from "../images/programmers.png";
import arrow1_img from "../images/arrow1.png";


function Course_textC() {
    return (
        <div>
            <Header />
            <div className="button_menu">
                                    <img src={arrow1_img} alt="" className="arrow1_img" />
                                </div>
              <div className="centered-text">
                 <p><strong>ПЕРЕМЕННЫЕ И ТИПЫ ДАННЫХ C++</strong></p>
                   <p>
                   Переменная - это именованное место
                    в памяти, которое хранит значение определенного типа.
                    Для объявления переменной в C++ используется следующий
                     синтаксис: тип_данных имя_переменной
                    </p>
        <pre> int age; </pre>
        <p><strong>Типы данных в C++</strong></p> 
        <p><strong>Целочисленные типы данных</strong></p>                  
        <pre>
        <p>- int: целое число.</p>
       <p>- short: короткое целое число.</p> 
       <p>- long: длинное целое число.</p> 
        <p>- long long: очень длинное целое число.</p>
         </pre>
         <p><strong>Типы данных с плавающей запятой</strong></p>
         <pre><p>- float: число с плавающей запятой одинарной точности.</p>
              <p>- double: число с плавающей запятой двойной точности.</p> 
        </pre>
        <p><strong>Символьные типы данных</strong></p>
        <pre><p>- char: символ.</p>
        </pre>
        <p><strong>Логический тип данных</strong></p>
        <pre><p>- bool: логическое значение (true или false).</p>
        </pre>
        <p><strong>Примеры использования</strong></p>
        <pre><p> - Объявление переменных различных типов:</p>
        <p>int number = 10;</p>
        <p>float pi = 3.14;</p>
        <p>char letter = 'A';</p>
        <p>bool isTrue = true;</p>
        </pre>

        <pre><p> - Взаимодействие с переменными:</p>
        <p>int a = 5;</p>
        <p>int b = 3;</p>
        <p>int sum = a + b;</p>
        <p>float average = (a + b) / 2.0;</p>
        </pre>

        <p><strong>Приведение типов (Type Casting)</strong></p>
        <pre><p>- Явное приведение типов позволяет изменить тип переменной.</p>
        <p>- Пример явного приведения типа:</p>
        <p> double num1 = 3.14;</p>
        <p>int num2 = static_cast(int)(num1);</p>
        <p>char letter = 'A';</p>
        <p>bool isTrue = true;</p>
        </pre>



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
 
export default Course_textC;
