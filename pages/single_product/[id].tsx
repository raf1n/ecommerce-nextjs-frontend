import React from 'react'
import { useSelector } from 'react-redux'
import SingleProduct from '../../components/pages/Singleproduct/SingleProduct'
// import SingleProduct from '../../components/pages/singleproduct/SingleProduct'
import { controller } from '../../src/state/StateController'

interface Props {
}

const SingleProductPage: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)

  return (
    <div>
      <SingleProduct />
    </div>
  )
}

export default SingleProductPage;