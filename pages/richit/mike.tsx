import React from 'react'
import { useSelector } from 'react-redux'
import WishList from '../../components/pages/Wishlist/Wishlist'
import { controller } from '../../src/state/StateController'
import MyProfile from '../../components/pages/MyProfile/MyProfile'
import ShopByBrand from '../../components/pages/HomePage/ShopByBrand/ShopByBrand'
import TopRated from '../../components/pages/HomePage/TopRatedProducts/TopRated'
import ItemDetails from '../../components/pages/HomePage/ItemDetails/ItemDetails'
import Contact from '../../components/pages/Contact/Contact'
import FAQ from '../../components/pages/FAQ/FAQ'


interface Props {}

const sadab: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <>
      <ShopByBrand />
      <TopRated />
      <ItemDetails />
      <Contact />
      <FAQ />
      <WishList />
      <MyProfile />
    </>
  );
};

export default sadab;
