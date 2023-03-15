import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import SingleBlogPage from '../../components/pages/BlogsPage/SingleBlogPage'
import { controller } from '../../src/state/StateController'

interface Props {
}

const blog: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return <SingleBlogPage />
}

export async function getServerSideProps(context: any) {

  console.log(context.query.slug)
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default blog