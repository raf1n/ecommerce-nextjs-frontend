import { useSelector } from "react-redux";
import { controller } from "../src/state/StateController";
<<<<<<< HEAD
import Homepage from "../components/pages/homepage/Homepage";
=======
// import Homepage from "../components/pages/homepage/Homepage";

>>>>>>> 884db72c622baffd67ca9f7bebe5afc3e5e94834

const index = () => {
  const states = useSelector(() => controller.states);

  return (
    <></>
  )
}

export default index;
