import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";


interface Props { }

const Homepage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <div>
<<<<<<< HEAD

  </div>;
=======
    {/* <ProductCategory />
    <Banner1 /> */}
  </div>
>>>>>>> 884db72c622baffd67ca9f7bebe5afc3e5e94834
};

export default Homepage;
