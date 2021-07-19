import React, { useState } from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";

const Header: React.FC<{}> = () => {
  const [isActiveHome, setIsActiveHome] = useState<boolean>(true);
  const [isActiveMember, setIsActiveMember] = useState<boolean>(false);
  const [isActiveAbout, setIsActiveAbout] = useState<boolean>(false);
  const history = useHistory();

  function activeClick(button: string) {
    setIsActiveHome(button === "Home" ? true : false);
    setIsActiveMember(button === "Member" ? true : false);
    setIsActiveAbout(button === "About" ? true : false);

    history.push(/*button === "Home" ? "/" : "/" + button.toLowerCase()*/ "/about");
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
