import React from "react"
import logoHeader from "../img/logoHeader.png"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <img src={logoHeader} alt="" />
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </div>
    </>
  )
}
