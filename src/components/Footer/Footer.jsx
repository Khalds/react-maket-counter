import React from "react"
import logoFooter from "../img/logoFooter.png"
import styles from "./Footer.module.css"

export default function Content() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <img src={logoFooter} alt="" />
          <ul>
            <li>
              <a href="#">Партнерам</a>
            </li>
            <li>
              <a href="#">Разработчикам</a>
            </li>
            <li>
              <a href="#">Вакансии</a>
            </li>
          </ul>
        </div>
        <div className="foot-right">
          <p>OOO "интукод", 2020г.</p>
        </div>
      </div>
    </>
  )
}
