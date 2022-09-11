import Link from "next/link";
import React from "react";
import styles from "../../styles/Header.module.css";

const NavbarComponent = () => {
  return (
    <nav className={styles.nav_container}>
      <ul className={styles.ul}>
        <li>
          <Link href="/">
            <a className={styles.links}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/pokemon">
            <a className={styles.links}>Pokemon</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
