import { useSelector } from "react-redux";
import AD1 from "../components/pages/homepage/Ads/AD1";
import AD2 from "../components/pages/homepage/Ads/AD2";
import AD3 from "../components/pages/homepage/Ads/AD3";
import BestSeller from "../components/pages/homepage/BestSeller/BestSeller";
import Campaign from "../components/pages/homepage/Campaign/Campaign";
import ProductCategory from "../components/pages/homepage/ProductCategory/ProductCategory";
import { controller } from "../src/state/StateController";


const index = () => {
    const states = useSelector(() => controller.states);

    return (
        <>
            <ProductCategory />
            <BestSeller />
            <AD1 />
            <AD2 />
            <AD3 />
            <Campaign />
        </>
    )
}

export default index;
