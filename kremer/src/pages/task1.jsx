import React, { useState } from 'react';
import Header from "../components/headers/header";
import Footer from "../components/footer/footer";
// import styles from "../styles/style_for_main.module.css"
// import styles from "../styles/python/tasks.module.css";
import styles from "../styles/stylesFortsk.module.css";
import { Link } from 'react-router-dom';
import { Sendcode } from '../compilator';
function Task1(){
    const [code, setCode] = useState('');
    const [result, setResult] = useState('');
    const langid = 71;
    const taskid = 1
    const send = async () => {
        const response = await Sendcode(code, langid, taskid)
        console.log(response)
        setResult(response)
    }

    const handleSubmit = () => {
        // Ваша логика для компиляции и выполнения кода здесь
        // Предположим, что результат компиляции или выполнения будет записан в переменную result
        setResult(`Задача решена верно!`);
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
        
                                          С клавиатуры вводятся два челых числа
                    </p>
                    <p> Программа должна определить наименьшую и наибольшую цифры, которые входят в состав данного натурального числа и сначала вывести большу, а потом меньшую</p>
                </div>
                <div className={styles.compiler}>
                    <h2></h2>
                    <textarea
                        className={styles.codeInput}
                        placeholder="Введите ваш код здесь..."
                        value={code}
                        onChange={e => setCode(e.target.value)}>
                    </textarea>
                    <div>
                        <button className={styles.compileButton} onClick={send}>Выполнить</button>
                        <div className={styles.result}>
                            <h3>Результат:</h3>
                            <textarea
                                value={result}
                                readOnly
                                rows="10"
                                cols="50"
                            />
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
