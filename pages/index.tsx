import { useSelector } from "react-redux";
import Homepage from "../components/pages/homepage/Homepage";
import { controller } from "../src/state/StateController";
import Homepage from "../components/pages/homepage/Homepage";

const index = () => {
  const states = useSelector(() => controller.states);

  return (
<<<<<<< HEAD
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
=======
    <Homepage />
  )
  // <div>
  //   <p className="text-lg">Counter
  //     {states.counter}
  //   </p>
  //   <button onClick={() => {
  //     controller.increase()
  //   }}>+</button>
  //   <button onClick={() => {
  //     //
  //     // doSomething()
  //     controller.decrease()
  //   }}>-</button>
  // </div>
}
>>>>>>> c6db9b063e248da38f3b23d1a6a6c15f106ab106

export default index;
