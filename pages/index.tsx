import { useSelector } from "react-redux";
import Homepage from "../components/pages/Homepage/Homepage";
// import Homepage from "../components/pages/HomePage/Homepage";
import { controller } from "../src/state/StateController";

const index = () => {
  const states = useSelector(() => controller.states);

  return <Homepage />
}

export default index;
