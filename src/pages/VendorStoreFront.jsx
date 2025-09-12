import VendorHome from "../components/VendorComponents/VendorHome";
import VendorExplore from "../components/VendorComponents/VendorExplore";
import VendorPromoDeals from "../components/VendorComponents/VendorPromoDeals";
import VendorCategories from "../components/VendorComponents/VendorCategories";
import StoreModal from "../components/Modals/StoreModal";

const VendorStoreFront = () => {
  return (
    <div>
      <VendorHome />
      <VendorExplore />
      <VendorPromoDeals />
      <VendorCategories />
      <StoreModal />
    </div>
  );
};

export default VendorStoreFront;
