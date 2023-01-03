import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import DeliveryComponent from './DeliveryComponent'

interface Props {
}

const DeliveryComponents: React.FC<Props> = (props) => {
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
            <DeliveryComponent
            deliveryPolicyData={deliveryPolicyData}
            key={deliveryPolicyData?.id}
            ></DeliveryComponent>)
           }
          </div>
        </div>
      );
}

export default DeliveryComponents