import React from 'react'
import { useSelector } from 'react-redux'
import PageHeader from '../../shared/PageHeader/PageHeader';
import { controller } from './../../../src/utils/StateController';

interface Props {
}

const BlogHeader: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return (
    <PageHeader slug="Blogs" link="/blogs" title="Blogs" />
  )
}

export default BlogHeader