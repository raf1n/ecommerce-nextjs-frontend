import { useSelector } from "react-redux";
import { controller } from "../src/state/StateController";
import Homepage from "../components/pages/homepage/Homepage";

const index = () => {
  const states = useSelector(() => controller.states);

  return (
    <>
      <Homepage />
    </>
  )
}

export default index;
