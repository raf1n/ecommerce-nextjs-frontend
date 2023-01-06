import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import PageHeader from "../../shared/PageHeader/PageHeader";
import BlogsCards from "./BlogsCards";

interface Props { }

const Blogs: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <PageHeader slug="Blogs" link="/blogs" title="Blogs" />
      <BlogsCards></BlogsCards>
    </div>
  );
};

export default Blogs;
