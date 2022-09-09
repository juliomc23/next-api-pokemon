import Link from "next/link";
import React from "react";
import styles from "../../styles/Header.module.css";

const NavbarComponent = () => {
  return (
    <nav className={styles.header_container}>
      <ul className={styles.ul}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pokemon">Pokemon</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
