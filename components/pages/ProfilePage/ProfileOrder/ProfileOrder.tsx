import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";

interface Props {}

const ProfileOrder: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

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
          {[1, 2, 3, 4, 5, 6, 7].map((data) => (
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="text-center py-4">
                <span className="text-lg text-qgray font-medium">
                  #1610280770
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-qgray whitespace-nowrap">
                  24 Dec 2022
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-qblack whitespace-nowrap px-2 ">
                  $196566.95
                </span>
              </td>
              <td className="py-4 flex justify-center ">
                <div className="flex space-x-2 items-center">
                  <Link href="/vieworder">
                    <div className="w-[116px] h-[46px] bg-qyellow text-qblack font-bold flex justify-center items-center cursor-pointer">
                      <span>View Details</span>
                    </div>
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
