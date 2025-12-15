import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

export default function NotificationControls() {
  let { message, showMessage } = useContext(NotificationContext);

  return (
    <div>
      <button onClick={() => showMessage("This is a notification message")}>
        Show Notification
      </button>
    </div>
  );
}
