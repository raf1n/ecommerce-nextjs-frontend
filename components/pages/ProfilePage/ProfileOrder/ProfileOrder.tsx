import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { IOrder } from "../../../../interfaces/models";
import { EcommerceApi } from "../../../../src/API/EcommerceApi";
import { controller } from "../../../../src/state/StateController";
import { CartHandler } from "../../../../src/utils/CartHandler";

interface Props {
  orders: IOrder[];
}

const ProfileOrder: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  // console.log(res);

  // const [allOrders, setAllOrders] = useState<IOrder[]>([]);

  // useEffect(() => {
  //   const getAllOrders = async () => {
  //     const { res, err } = await EcommerceApi.allOrders("user_slug_1");
  //     if (res) {
  //       setAllOrders(res.data);
  //     }
  //   };

  //   getAllOrders();
  // }, []);

  // console.log(allOrders)

  return (
    <div className="relative w-full overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <tr className="text-base text-qgray whitespace-nowrap px-2 border-b default-border-bottom ">
            <td className="py-4 block whitespace-nowrap text-center">Order</td>
            <td className="py-4 whitespace-nowrap text-center">Date</td>
            <td className="py-4 whitespace-nowrap text-center">Amount</td>
            <td className="py-4 whitespace-nowrap text-center">Action</td>
          </tr>
          {props.orders.length !== 0 &&
            props.orders.map((order: IOrder) => (
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="text-center py-4">
                  <span className="text-lg text-qgray font-medium">
                    {order.slug}
                  </span>
                </td>
                <td className="text-center py-4 px-2">
                  <span className="text-base text-qgray whitespace-nowrap">
                    {order.createdAt && order.createdAt.split("T")[0]}
                  </span>
                </td>
                <td className="text-center py-4 px-2">
                  <span className="text-base text-qblack whitespace-nowrap px-2 ">
                    ${`${CartHandler.cartSubTotal(order.product_list)}`}
                  </span>
                </td>
                <td className="py-4 flex justify-center">
                  <div className="flex space-x-2 items-center">
                    <Link
                      href={`/order/${order.slug}`}
                      className="w-[116px] h-[46px] bg-qyellow text-qblack font-bold flex justify-center items-center cursor-pointer">
                      <span>View Details</span>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileOrder;
