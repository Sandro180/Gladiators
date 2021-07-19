import React from "react";
import styles from "./Button.module.css";

const Button: React.FC<{
    children: any;
    isActive: boolean;
    changeActive: any;
}> = ({ children, isActive, changeActive }) => {
    return (
        <button
            className={isActive ? styles.button__active : styles.button}
            onClick={() => changeActive()}
        >
            {children}
        </button>
    );
};

export default Button;
