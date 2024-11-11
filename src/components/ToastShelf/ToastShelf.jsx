import React from "react";
import styles from "./ToastShelf.module.css";
import Toast from "../Toast/Toast";

import { ToastContext } from "../ToastProvider";

function ToastShelf({ handleDismiss }) {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            id={toast.id}
            variant={toast.variant}
            handleDismiss={handleDismiss}
            message={toast.message}
          ></Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
