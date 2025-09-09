import React from "react";
import VendorHome from "../components/VendorComponents/VendorHome";
import VendorExplore from "../components/VendorComponents/VendorExplore";
import VendorPromoDeals from "../components/VendorComponents/VendorPromoDeals";
import VendorFood from "../components/VendorComponents/VendorFood";

const VendorStoreFront = () => {
  return (
    <div>
      <VendorHome />
      <VendorExplore />
      <VendorPromoDeals />
      <VendorFood />
    </div>
  );
};

export default VendorStoreFront;
