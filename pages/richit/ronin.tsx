import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../src/state/StateController'
import CategoryPage from '../../components/pages/CategoryPage/CategoryPage';
import FAQ from '../../components/pages/FAQ/FAQ';
import SingleProduct from '../../components/pages/SingleProduct/SingleProduct';
import BestProducts from './../../components/pages/HomePage/BestProducts/BestProducts';
import Footer from '../../components/shared/Footer/Footer';


interface Props {
}

const Toukir: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)

  return (
    <div className='bg-gray-100'>
      <CategoryPage />
      <FAQ />
      <SingleProduct />
      <BestProducts />
      <Footer />
    </div>
  )
}

export default Toukir