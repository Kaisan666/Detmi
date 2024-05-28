import styles from "../styles/tasks.module.css";
import Header from "../components/headers/header";
import Footer from "../components/footer/footer";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

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
                        </tr>
                    </thead>
                    <tbody>
                    {tasks.length > 0 && tasks.map((task) => (
                         <tr>
                         <td>{task.id}</td>
                         <td> <a href={task.url}>{task.title}</a> </td>
                         <td>{task.rating}</td>
                     </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}


export default Tasks;