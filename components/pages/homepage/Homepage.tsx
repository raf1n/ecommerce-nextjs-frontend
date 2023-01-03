import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
<<<<<<< HEAD
import DeliberyCompenents from "./DeliberyPolicyData/DeliberyCompenents";
=======
import Banner1 from "./Banners/Banner1";
import ProductCategory from "./ProductCategory/ProductCategory";
>>>>>>> eb5a120173d6c6ba735400672b3f20c40dc77196

interface Props { }

const Homepage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

<<<<<<< HEAD
  const deliveryPolicyDatas = [
    {
      id:1,
      name: "Free Shipping" ,
      des:"Free Shipping on Payment",
      icon:""
    }  ,
    {
      id:2,
      name: "Return Policy" ,
      des:"24 Hours Return Policy",
      icon:""
    }  ,
    {
      id:3,
      name: "Secured Payment" ,
      des:"Secure Card Payments",
      icon:""
    }  ,
    {
      id:4,
      name: "Best Quality" ,
      des:"Best Quality Products",
      icon:""
    }  
  ]

  return (
    <div>
      <div className="grid grid-cols-4 gap-4  m-8  p-8   container-x mx-auto pb-[60px]">
       {
        deliveryPolicyDatas.map((deliveryPolicyData) => 
        <DeliberyCompenents
        deliveryPolicyData={deliveryPolicyData}
        key={deliveryPolicyData?.id}
        ></DeliberyCompenents>)
       }
      </div>
    </div>
  );
=======
  return <div>
    <ProductCategory />
    <Banner1 />
  </div>
>>>>>>> eb5a120173d6c6ba735400672b3f20c40dc77196
};

export default Homepage;
