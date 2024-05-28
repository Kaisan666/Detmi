import React, { useState } from 'react';
import Header from "../components/headers/header";
import Footer from "../components/footer/footer";
// import styles from "../styles/style_for_main.module.css"
// import styles from "../styles/python/tasks.module.css";
import styles from "../styles/stylesFortsk.module.css";
import { Link } from 'react-router-dom';
function Task1(){
    const [code, setCode] = useState('');
    const [result, setResult] = useState('');

    const handleChange = (event) => {
        setCode(event.target.value);
    };

    const handleSubmit = () => {
        // Ваша логика для компиляции и выполнения кода здесь
        // Предположим, что результат компиляции или выполнения будет записан в переменную result
        setResult(`С входными данными "15", ваш ответ: 1, 5. Задача решена верно!`);
    };

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.Allwrapper}>
            {/* <div class="sec-widget" data-widget="e5b40b2c4700fa274dfd0b5749e6fa98"></div> */}
            <div className={styles.content}>
                <div className={styles.task}>
                    <h1>Задача №1</h1>
                    <p>
        
                                          Организовать ввод двухзначного натурального числа с клавиатуры.
                    </p>
                    <p> Программа должна определить наименьшую и наибольшую цифры, которые входят в состав данного натурального числа.</p>
                </div>
                <div className={styles.compiler}>
                    <h2></h2>
                    <textarea
                    

                        className={styles.codeInput}
                        placeholder="Введите ваш код здесь..."
                        value={code}
                        onChange={handleChange}>
                    </textarea>
                    <div>
                        <button className={styles.compileButton} onClick={handleSubmit}>Выполнить</button>
                        <div className={styles.result}>
                            <h3>Результат:</h3>
                            <p>{result}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}
export default Task1;
