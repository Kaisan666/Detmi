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
                            <td>1</td>
                            <td> <a href="https://ee4ea046.widgets.sphere-engine.com/lp?hash=ZrJrIjy00h">Долой комментарии!</a> </td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td> <td> <a href="https://ee4ea046.widgets.sphere-engine.com/lp?hash=IBcjl1ocdx">Долой комментарии!</a> </td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10</td>
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
