import styles from "./ToastShelf.module.css";
import Toast from "../Toast/Toast";

function ToastShelf({ toasts, handleDismiss }) {
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
