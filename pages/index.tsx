import { useSelector } from "react-redux";
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
    <h1>Hello</h1>
  </div>
}

export default index;
