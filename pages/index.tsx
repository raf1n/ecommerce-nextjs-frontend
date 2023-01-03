import { useSelector } from "react-redux";
import Header from "../components/shared/header/Header/Header";
import { controller } from "../src/state/StateController";


const index = () => {
  const states = useSelector(() => controller.states);

  return <div>
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
  </div>
}

export default index;
