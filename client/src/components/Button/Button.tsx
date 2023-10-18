import React from "react";
import { Context } from "../../context/Context";
import { useContext } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  data?: string;
}

export const Button: React.FC<ButtonProps> = ({ data }) => {
  const { setBlogData } = useContext(Context);
  const handleData = () => {
    setBlogData(data);
  };
  return (
    <button className={styles.button} onClick={handleData}>
      Detail
    </button>
  );
};
