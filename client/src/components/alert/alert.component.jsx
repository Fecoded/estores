import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alert = (type, msg) => {
  switch (type) {
    case "info":
      toast.info(msg);
      break;
    case "success":
      toast.success(msg);
      break;
    case "warning":
      toast.warning(msg);
      break;
    case "error":
      toast.error(msg);
      break;
    default:
      return null;
  }
};

export default Alert;
