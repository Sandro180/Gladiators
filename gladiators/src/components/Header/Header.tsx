import React, { useState } from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";

const Header: React.FC<{}> = () => {
  const [isActiveHome, setIsActiveHome] = useState<boolean>();
  const [isActiveMember, setIsActiveMember] = useState<boolean>();
  const [isActiveAbout, setIsActiveAbout] = useState<boolean>();
  const history = useHistory();

  function activeClick(button: string) {
    setIsActiveHome(button.includes("Home"));
    setIsActiveMember(button.includes("Member"));
    setIsActiveAbout(button.includes("About"));

    history.push(button === "Home" ? "/" : "/" + button.toLowerCase());
  }

  return (
    <div className={styles.header}>
      <div className={styles.button__wrapper}>
        <Button
          isActive={isActiveHome}
          changeActive={() => activeClick("Home")}
        >
          Home
        </Button>
      </div>
      <div className={styles.button__wrapper}>
        <Button
          isActive={isActiveMember}
          changeActive={() => activeClick("Member")}
        >
          Mitglieder
        </Button>
      </div>
      <div className={styles.button__wrapper}>
        <Button
          isActive={isActiveAbout}
          changeActive={() => activeClick("About")}
        >
          Über Uns
        </Button>
      </div>
    </div>
  );
};

export default Header;
