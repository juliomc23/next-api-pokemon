import React from "react";
import Link from "next/link";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import styles from "../../styles/Footer.module.css";

const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <h3>This website is made by Julio Macías Caldera</h3>
      <div>
        <h4 className={styles.title}>Social networks</h4>
        <ul className={styles.ul}>
          <li>
            <a
              href="https://linkedin.com/in/juliomaciascaldera"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <div className={styles.div_link}>
                <LinkedInIcon
                  style={{
                    color: "#5463ff",
                  }}
                />
                <span className={styles.name}>Julio Macías Caldera</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/juliomc23"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <div className={styles.div_link}>
                <GitHubIcon
                  style={{
                    color: "black",
                  }}
                />
                <span className={styles.name}>Julio Macías Caldera</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterComponent;
