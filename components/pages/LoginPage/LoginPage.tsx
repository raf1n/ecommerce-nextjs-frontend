import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import LoginForm from "./LoginForm";
import SharedLoginSignupImage from "./../../shared/SharedLoginSignupImage/SharedLoginSignupImage";

interface Props {}

const LoginPage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full min-h-screen  pt-0 pb-0">
      <div className="login-page-wrapper w-full py-10">
        <div className="container-x flex mx-auto">
          <div className="lg:flex justify-center items-center relative w-full lg:min-h-[500px]">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
