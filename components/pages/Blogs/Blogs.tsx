import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import BlogHeader from "./BlogHeader";
import BlogsCards from "./BlogsCards";

interface Props {}

const Blogs: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <BlogHeader />
      <BlogsCards></BlogsCards>
    </div>
  );
};

export default Blogs;
