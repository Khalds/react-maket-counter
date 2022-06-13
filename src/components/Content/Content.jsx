import React from "react"
import styles from "./Content.module.css"

export default function Content() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.count}>0</div>
        <div className={styles.buttons}>
          <button className={styles.incr}>Увеличить</button>
          <button className={styles.decr}>Уменьшить</button>
          <button className={styles.reset}>Сбросить</button>
        </div>
      </div>
    </>
  )
}
