import React, { useState, useEffect } from "react"

import Sun from "../assets/sun.svg"
import Moon from "../assets/moon.svg"
import { Link } from "gatsby"

import * as styles from "../styles/header.module.css"

const Header = props => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [, isDark])

  return (
    <div className={styles.headerContainer}>
      {isDark ? (
        <img
          className={styles.darkModeBtn}
          onClick={() => setIsDark(!isDark)}
          src={Sun}
        />
      ) : (
        <img
          className={styles.darkModeBtn}
          onClick={() => setIsDark(!isDark)}
          src={Moon}
        />
      )}
      <nav>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/about" className={styles.link}>
          About
        </Link>
      </nav>
    </div>
  )
}

export default Header
