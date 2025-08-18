import React, { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import Slide from "./Slide";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const NavigationButtons = styled.div`
  position: relative;
  display: flex;
  height: 60px;
  margin: 0 auto;
  width: 20%;
  margin-top: 1rem;
  justify-content: center;
  z-index: 1000;
  gap: 10px;
`;

const NavBtn = styled.div`
  background: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  user-select: none;
`;

function mod(a, b) {
  return ((a % b) + b) % b;
}

const VerticalCarousel = ({
  slides,
  goToSlide,
  showNavigation = true,
  offsetRadius = 2,
  animationConfig = { tension: 120, friction: 14 }
}) => {
  const [index, setIndex] = useState(0);

  // move slide handler
  const moveSlide = useCallback(
    (direction) => {
      setIndex((prevIndex) => mod(prevIndex + direction, slides.length));
    },
    [slides.length]
  );

  // keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.isComposing || event.keyCode === 229) return;
      if (event.keyCode === 38) moveSlide(-1); // up
      if (event.keyCode === 40) moveSlide(1); // down
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [moveSlide]);

  // clamp offsetRadius so it doesn’t exceed slides
  const clampOffsetRadius = (offset) => {
    const upperBound = Math.floor((slides.length - 1) / 2);
    if (offset < 0) return 0;
    if (offset > upperBound) return upperBound;
    return offset;
  };

  const getPresentableSlides = () => {
    const radius = clampOffsetRadius(offsetRadius);
    const presentableSlides = [];

    for (let i = -radius; i < 1 + radius; i++) {
      presentableSlides.push(slides[mod(index + i, slides.length)]);
    }

    return presentableSlides;
  };

  return (
    <>
      <Wrapper>
        {getPresentableSlides().map((slide, presentableIndex) => (
          <Slide
            key={slide.key}
            content={slide.content}
            moveSlide={moveSlide}
            offsetRadius={clampOffsetRadius(offsetRadius)}
            index={presentableIndex}
            animationConfig={animationConfig}
          />
        ))}
      </Wrapper>
      {showNavigation && (
        <NavigationButtons>
          <NavBtn onClick={() => moveSlide(1)}>&#8593;</NavBtn>
          <NavBtn onClick={() => moveSlide(-1)}>&#8595;</NavBtn>
        </NavigationButtons>
      )}
    </>
  );
};

VerticalCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any,
      content: PropTypes.node
    })
  ).isRequired,
  goToSlide: PropTypes.number,
  showNavigation: PropTypes.bool,
  offsetRadius: PropTypes.number,
  animationConfig: PropTypes.object
};

export default VerticalCarousel;
