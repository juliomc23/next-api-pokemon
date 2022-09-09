import React from "react";
import LogoComponent from "../Logo/LogoComponent";
import NavbarComponent from "../Navbar/NavbarComponent";
import styles from "../../styles/Header.module.css";

const HeaderComponent = () => {
  return (
    <header className={styles.container}>
      <LogoComponent />
      <NavbarComponent />
    </header>
  );
};

export default HeaderComponent;
