import React from 'react'
import { useSelector } from 'react-redux'
import Contact from '../../components/pages/ContactPage/Contact';
import FAQ from '../../components/pages/FAQPage/FAQ';
import Itemdetails from '../../components/pages/HomePagee/ItemDetails/ItemDetails';
import ShopByBrand from '../../components/pages/HomePagee/ShopByBrandSection/ShopByBrand';
import TopRated from '../../components/pages/HomePagee/TopRatedProductsSection/TopRatedSection';
import MyProfile from '../../components/pages/ProfilePage/AdminProfile/AdminProfile';
import WishList from '../../components/pages/WishlistPage/Wishlist';
import { controller } from '../../src/state/StateController'



interface Props { }

const sadab: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <>
      <ShopByBrand />
      <TopRated />
      <Itemdetails />
      <Contact />
      <FAQ />
      <WishList />
      <MyProfile />
    </>
  );
};

export default sadab;
