import React from "react";
import HeaderComponents from "../../layouts/header/HeaderComponents.tsx";
import FooterComponents from "../../layouts/footer/FooterComponents.tsx";
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
