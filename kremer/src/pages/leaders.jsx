import React from 'react';
import "../styles/leaders.css"
import Header from "../components/header";
import Footer from "../components/footer";

function Leaders() {
        return (
            <div>
                <Header />
    
                <h2>Таблица лидеров</h2>
                <table>
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
    
              
                <Footer />
            </div>
    );
}

export default Leaders;
