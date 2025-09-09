import VendorHome from "../components/VendorComponents/VendorHome";
import VendorExplore from "../components/VendorComponents/VendorExplore";
import VendorPromoDeals from "../components/VendorComponents/VendorPromoDeals";
import VendorCategories from "../components/VendorComponents/VendorCategories";

const VendorStoreFront = () => {
  return (
    <div>
      <VendorHome />
      <VendorExplore />
      <VendorPromoDeals />
      <VendorCategories />
    </div>
  );
};

export default VendorStoreFront;
