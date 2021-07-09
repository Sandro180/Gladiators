import React from "react";
import styles from "./Header.module.css";

const Header: React.FC<{}> = () => {
  return (
    <div className={styles.header}>
      <button className={styles.buttons}>Home</button>
      <button className={styles.buttons}>Teams</button>
      <button className={styles.buttons}>Über Uns</button>
    </div>
  );
};

export default Header;
