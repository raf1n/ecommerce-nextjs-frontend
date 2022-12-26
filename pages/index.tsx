import { useSelector } from "react-redux";
import { controller } from "../src/utils/StateController";


const index = () => {
  const states = useSelector(() => controller.states);

  return <div>
    <p>Counter
      {states.counter}
    </p>
      <button onClick={() => {
          controller.increase()
      }}>+</button>
      <button onClick={() => {
          //
          // doSomething()
          controller.decrease()
      }}>-</button>
  </div>
}

export default index;
