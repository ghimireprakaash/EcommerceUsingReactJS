import React from "react";
import HeaderComponents from "../../layouts/HeaderComponents";
import FooterComponents from "../../layouts/FooterComponents";
import BannerComponents from "../../lib/BannerComponents.tsx";
import ProductCardComponents from "../../lib/ProductCardComponents.tsx";

function HomeComponents() {
  return (
    <React.Fragment>
      <HeaderComponents />
      <BannerComponents />
      <ProductCardComponents />
      <FooterComponents />
    </React.Fragment>
  );
}

export default HomeComponents;
