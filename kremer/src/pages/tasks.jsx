import styles from "../styles/tasks.module.css";
import Header from "../components/headers/header";
import Footer from "../components/footer/footer";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const Tasks = () =>  {
    const [tasks, setTasks] = useState([]);

    const fetch = async () =>{
       await axios
        .get("http://localhost:5000/api/tasks",{
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('token')
            }
        })
        .then((response) => {
            console.log(response.data);
            setTasks(response.data.tasks);
        });
    }

    useEffect(() => {
        fetch();
     }, []);

     debugger;
        return (
        <div>
            <Header />
            <div className={styles.tasks}>
                <h2 className={styles.title}>ЗАДАЧИ</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Наименование</th>
                            <th>Количество баллов</th>
                            <th>Статус задачи</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                         <td><Link to="/task1"> 1</Link></td>
                         <td>Большая и меньшая цифры числа</td>
                         <td>10</td>
                         <td>не приступал</td>
                     </tr>
                         <tr>
                         <td>2</td>
                         <td>Алгебраическая сумма</td>
                         <td>25</td>
                         <td>не приступал</td>
                     </tr>
                         <tr>
                         <td>3</td>
                         <td>Определить, пройдет ли кирпич в отверстие</td>
                         <td>15</td>
                         <td>не приступал</td>
                     </tr>
                         <tr>
                         <td>4</td>
                         <td>Брошенное тело под углом</td>
                         <td>35</td>
                         <td>не приступал</td>
                     </tr>
                         <tr>
                         <td>5</td>
                         <td>Вычислить длину вектора с координатами x, y, z</td>
                         <td>40</td>
                         <td>не приступал</td>
                     </tr>
                         <tr>
                         <td>6</td>
                         <td>След матрицы</td>
                         <td>10</td>
                         <td>не приступал</td>
                     </tr>
                         <tr>
                         <td>7</td>
                         <td>Целое число</td>
                         <td>55</td>
                         <td>не приступал</td>
                     </tr>
                         <tr>
                         <td>8</td>
                         <td>Шесть равнобедренных треугольников</td>
                         <td>80</td>
                         <td>не приступал</td>
                     </tr>
                         <tr>
                         <td>9</td>
                         <td>Циклическое вычисление суммы чисел</td>
                         <td>5</td>
                         <td>не приступал</td>
                     </tr>
                         <tr>
                         <td>10</td>
                         <td>Сумма 1/sin(1) + 1/(sin(1) + sin(2)) + ... + 1/(sin(1)+sin(2)+...+sin(n))</td>
                         <td>10</td>
                         <td>не приступал</td>
                     </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}


export default Tasks;