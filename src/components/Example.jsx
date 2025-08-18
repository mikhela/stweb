import React, { useState } from "react";
import VerticalCarousel from "./VerticalCarousel";
import { config } from "react-spring";

const Example = ({ product }) => {
  const [offsetRadius] = useState(2);
  const [showNavigation] = useState(true);
  const [animationConfig] = useState(config.gentle);

  // 👇 turn product.images into carousel slides
  const slides = product.images?.map((imgUrl, index) => ({
    key: index,
    content: (
      <img
        src={imgUrl}
        alt={`${product.name} ${index}`}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
        }}
      />
    )
  })) || [];

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "40%",
        height: "80vh",
        margin: "10% auto",
      }}
    >
      

      <VerticalCarousel
        slides={slides}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={animationConfig}
      />
    </div>
  );
};

export default Example;
