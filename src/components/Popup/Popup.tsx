import React, { FC } from "react";
import styles from "./Popup.module.scss";

interface IPopup {
  content: any;
  handleClose: any;
}

const Popup: FC<IPopup> = ({ content, handleClose }: IPopup) => {
  return (
    <div className={styles.Popup}>
      <div className={styles.Box}>
        <span className={styles.CloseIcon} onClick={handleClose}>
          x
        </span>
        {content}
      </div>
    </div>
  );
};

export default Popup;
