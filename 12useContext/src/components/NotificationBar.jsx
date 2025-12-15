import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

export default function NotificationBar() {
  let { message, clearMessage } = useContext(NotificationContext);

  if (!message) return;

  return (
    <div>
      <p>{message}</p>
      <button onClick={clearMessage}>Clear Message</button>
    </div>
  );
}
