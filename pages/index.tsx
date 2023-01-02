import { useSelector } from "react-redux";
import { controller } from "../src/state/StateController";
import Homepage from "../components/pages/homepage/Homepage";

const index = () => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      {/* <p className="text-lg">Counter
      {states.counter}
    </p>
    <button onClick={() => {
      controller.increase()
    }}>+</button>
    <button onClick={() => {
      //
      // doSomething()
      controller.decrease()
    }}>-</button> */}
      <Homepage></Homepage>
    </div>
  );
};

export default index;
