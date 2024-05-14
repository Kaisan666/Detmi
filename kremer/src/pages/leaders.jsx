import React from 'react';
import styles from "../styles/leaders.module.css";
import Header from "../components/headers/header";
import Footer from "../components/footer/footer";

function Leaders() {
    return (
        <div>
            <Header />
            <div className={styles.leaders}>
                <h2 className={styles.title}>Таблица лидеров</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Никнейм</th>
                            <th>Количество баллов</th>
                            <th>Ранг</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Иван</td>
                            <td>100</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Мария</td>
                            <td>90</td>
                            <td>2</td>
                        </tr>
                        {/* Добавьте здесь другие строки таблицы */}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}

export default Leaders;
