import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import BlogsCards from "./BlogsCards";

interface Props {}

const Blogs: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <BlogsCards></BlogsCards>
    </div>
  );
};

export default Blogs;
