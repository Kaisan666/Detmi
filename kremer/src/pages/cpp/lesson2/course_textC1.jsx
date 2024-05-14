import React from 'react';
//import Header from "../../components/headerPY";
import Header from "../../../components/headerPY";
import Footer from "../../../components/footerPY";
import "../../../styles/cpp/CPPcourseText.module.css";

import pdf from "../../../images/Python1.pdf";
//import programmers_img from "../images/programmers.png";
import arrow1_img from "../../../images/arrow1.png";


function Course_textC1() {
    return (
        <div>
            <Header />
            <div className="button_menu">
                                    <img src={arrow1_img} alt="" className="arrow1_img" />
                                </div>
              <div className="centered-text">
                 <p><strong>СЛОВНЫЕ КОНСТРУКЦИИ. ОПЕРАТОРЫ IF-ELSE, SWITCH-CASE</strong></p>
                   <p>
                   Оператор if-else
                    </p>
        <p><strong>- Синтаксис оператора if: </strong></p> 
          
        <pre>
             <p> if (условие)  </p>
         </pre>
         <p><strong>Оператор else позволяет выполнить
             другой блок кода, если условие оператора if ложно.</strong></p>
         <p> - Синтаксис оператора if-else:</p>
              <p>- double: число с плавающей запятой двойной точности.</p> 
       
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
 
export default Course_textC1;
