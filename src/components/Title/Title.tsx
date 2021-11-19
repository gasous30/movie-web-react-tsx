import React from "react";
import styles from "./Title.module.scss";
import { FC } from "react";

interface ITitle {
  title: string;
}

const Title: FC<ITitle> = ({ title }: ITitle) => {
  return (
    <div className={styles.Title}>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
