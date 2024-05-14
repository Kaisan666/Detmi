import React from 'react';
import Header from "../../../components/headerPY";
import Footer from "../../../components/footerPY";
import "../../../styles/js/course_textJS1.css";
//import o_img from "../images/0.png";
//import pc_img from "../images/1.png";
import arrow1_img from "../../../images/arrow1.png";


function Course_textJS1() {
    return (
        <div>
            <Header />
            <div className="button_menu">
                                    <img src={arrow1_img} alt="" className="arrow1_img" />
                                </div>
              <div className="centered-text">
                 <p><strong>ПЕРЕМЕННЫЕ И ТИПЫ ДАННЫХ В JAVASCRIPT</strong></p>
                   <p>
                  <p>Переменные:</p> 
                        <p>- Переменные в JavaScript используются для хранения данных и значений.</p>
                        <p>- Для объявления переменной используется ключевое слово "let" или "const".</p>
                        <p>- Примеры объявления переменных:</p>
                    </p>
        <pre>
        <p>let age = 25;</p>
        <p>const name = "Alice";</p>
        </pre>
                <p>Типы данных:</p> 
                        <p>JavaScript поддерживает следующие типы данных:</p>
                        <p>- Числа (Numbers): целые числа и числа с плавающей точкой.</p>     
        <pre>
                <p>let num = 10;</p>
                <p>let pi = 3.14;</p>
         </pre>
              
        <p>- Строки (Strings): последовательности символов в кавычках</p>
        
                     <pre>                  
                     let message = "Hello, World!";
                    </pre>
                
         <p>- Булевый тип (Boolean): логический тип данных, принимает значения true или false.</p>
                
                    <pre>
                    let isStudent = true;
                    </pre>
    
         <p>Динамическая типизация:</p>
         <p>JavaScript является языком с динамической типизацией, что означает, 
            что переменные могут содержать значения различных типов.</p>
                    <pre>                         
                    let value = 42; // value содержит число
                   <p>value = "Hello"; // теперь value содержит строку</p> 
                    </pre>
                    <p> Приведение типов:</p>
         <p>JavaScript автоматически выполняет приведение типов в некоторых случаях,
             например, при выполнении операций с разными типами данных.</p>
                    <pre>                         
                    let num = 10;
                   <p>let strNum = "20";</p> 
                   <p>let sum = num + strNum; 
                    // Результат будет "1020", так как произойдет конкатенация строк</p> 
                    </pre>
                    <p>- Массивы (Arrays): упорядоченные коллекции элементов.</p>
                    <pre>                         
                    let colors = ["red", "green", "blue"];
                    </pre> 


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
 
export default Course_textJS1;
