import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../src/state/StateController'
import FAQ from '../../components/pages/FAQ/FAQ';
import SingleProduct from '../../components/pages/SingleProduct/SingleProduct';
import BestProducts from './../../components/pages/HomePage/BestProducts/BestProducts';
import Footer from '../../components/shared/Footer/Footer';
import Blogs from '../../components/pages/Blogs/Blogs';
<<<<<<< HEAD
import AdminPage from './../../components/pages/Admin/AdminPage';
=======
import CategoryPage from '../../components/pages/CategoryPage/CategoryPage';
>>>>>>> 06bd96c2c2017ab4ce57650327294d629d56c005


interface Props {
}

const Toukir: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)

  return (
    <div className='bg-gray-100'>
      <AdminPage />
      <CategoryPage />
      <Blogs />
      <FAQ />
      <SingleProduct />
      <BestProducts />
      <Footer />
    </div>
  )
}

export default Toukir