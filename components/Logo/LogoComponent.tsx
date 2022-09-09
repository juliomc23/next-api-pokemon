import React from "react";
import Image from "next/image";
import styles from "../.././styles/Header.module.css";

const LogoComponent = () => {
  return (
    <div className={styles.logo}>
      <Image
        src="/images/Pokemon-Logo.png"
        alt="Pokemon-Logo"
        width={56}
        height={56}
      />
      <h1 className={styles.logo_title}>PokeApi NEXT</h1>
    </div>
  );
};

export default LogoComponent;
