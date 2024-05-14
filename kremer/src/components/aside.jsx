import React from "react";

// import '../styles/python_introduce.css'
import '../styles/python/python_introduce.module.css'


export default function AsideIntro(props){
    return(
        <aside className="aside-right" id="asidee">
                  <div className="aside-stiky-wrapper">
                    <div className="button__wrapper">
                      <a href="#" className=" button__link">
                      <button className="button__link-to-course" type="button" id="button__course">
                      Записаться!
                    </button>
                    </a>
                        
                    </div>
                    
                  
                  <div className="aside-right__main"> 
                    <h4 className="aside-right__title">В данном курсе:</h4>
                    <ul className="aside-right__list">
                      <li className="aside-right__list-item">
                        100500 уроков
                      </li>
                      <li className="aside-right__list-item">
                        Миллион тестов
                      </li>
                      <li className="aside-right__list-item">
                        Тысяси задач
                      </li>
                    </ul>
                    <span className="aside-right__bottom1">
                      Примерного время прохождения курса
                    </span>
                    <span className="aside-right__bottom2"> 50 часов</span>
                  </div>
                </div>
                </aside>
    )
}