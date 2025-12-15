import { useState } from "react";
import { NotificationContext } from "./NotificationContext";

export default function NotificationProvider({ children }) {
  const [message, setMessage] = useState(null);

  function showMessage(text) {
    setMessage(text);
  }

  function clearMessage() {
    setMessage(null);
  }

  return (
    <NotificationContext.Provider
      value={{ message, showMessage, clearMessage }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
