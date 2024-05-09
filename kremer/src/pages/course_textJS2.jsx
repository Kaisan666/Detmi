import React from 'react';
import Header from "../components/headerPY";
import Footer from "../components/footerPY";
import "../styles/course_textJS2.css";
//import o_img from "../images/0.png";
//import pc_img from "../images/1.png";
import arrow1_img from "../images/arrow1.png";


function Course_textJS2() {
    return (
        <div>
            <Header />
            <div className="button_menu">
                                    <img src={arrow1_img} alt="" className="arrow1_img" />
                                </div>
              <div className="centered-text">
                 <p><strong>МАТЕМАТИЧЕСКИЕ ДЕЙСТВИЯ</strong></p>
                   <p>
                  <p>Сложение</p> 
                        <p>Для сложения двух чисел используйте оператор +.</p>
                    </p>
        <pre>
        let sum = 5 + 3; // sum равен 8
        </pre>
                <p>Вычитание</p> 
                        <p>Для вычитания одного числа из другого используйте оператор -.</p>
        <pre>
        let difference = 10 - 4; // difference равен 6
         </pre>
              
        <p>Умножение</p>
        <p>Для умножения двух чисел используйте оператор *</p>
                     <pre>                  
                     let product = 6 * 7; // product равен 42
                    </pre>
                
         <p>Деление</p>
         <p>Для деления одного числа на другое используйте оператор /</p>    
                    <pre>
                    let quotient = 20 / 4; // quotient равен 5
                    </pre>
    
         <p>Остаток от деления (Modulo)</p>
         <p> Для получения остатка от деления используйте оператор %.</p>
                    <pre>                         
                    let remainder = 10 % 3; // remainder равен 1 (остаток от деления 10 на 3)
                    </pre>

                    <p> Возведение в степень</p>
         <p>Для возведения числа в степень используйте оператор **</p>
                    <pre>                         
                    let power = 2 ** 3; // power равен 8 (2 в третьей степени)
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
 
export default Course_textJS2;
