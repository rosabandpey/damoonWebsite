import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { useEffect } from "react";
import styles from "./styles/Toastify.module.css";

export default function Toastify({ position, type, label, alert }) {
  const notify = () => {
    switch (type) {
      case "Success":
        toast.success(label, { className: styles.toastBody });
        break;
      case "Error":
        toast.error(label);
        break;

      case "Warning":
        toast.warn(label);
        break;

      case "Info":
        toast.info(label);
        break;

      default:
        toast(label);
        break;
    }
  };

  useEffect(() => {
    if (alert) {
      notify();
    }
  }, [alert]);

  return (
    <div>
      <ToastContainer
        position={position}
        rtl
        className={styles.toastBody}
        style={{ bottom: "5em" }}
      />
    </div>
  );
}
