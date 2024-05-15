import React from 'react';
import styles from "../styles/tasks.module.css";
import Header from "../components/headers/header";
import Footer from "../components/footer/footer";

function Tasks() {
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
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        {/* Добавьте здесь другие строки таблицы */}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}


export default Tasks;
