import React, { useState } from "react";
import { useSpring, animated, useTrail } from "react-spring";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  // Plus sign animation properties
  // Moves left to attach to the minus sign on hover
  const plusProps = useSpring({
    to: {
      transform: isHovered ? "translateY(-30px)" : "translateY(0px)",
    },
    config: { mass: 1, tension: 280, friction: 60 },
  });

  // Minus sign animation properties
  // Moves right to attach to the plus sign on hover
  const minusProps = useSpring({
    to: {
      transform: isHovered ? "translateY(30px)" : "translateY(0px)",
    },
    config: { mass: 1, tension: 280, friction: 60 },
  });

  // No rising animation for now as requested to wait with it
  // Text animation properties for color change on hover
  const textProps = useSpring({
    color: isHovered ? "#ff0000" : "#000000", // Example color change on hover
    delay: isHovered ? 0 : 500,
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center justify-center hover:transition-all duration-500 ease-in-out py-2"
      >
        <animated.div className="flex flex-col items-center">
          <svg width="200" height="200" viewBox="0 0 200 200">
            {/* Plus Sign initially positioned to the left */}
            <animated.rect
              width="100"
              height="10"
              x="50" // Adjust x position for initial spacing
              y="95"
              style={plusProps}
            />
            <animated.rect
              width="10"
              height="100"
              x="95" // Adjust x position for initial spacing
              y="50"
              style={plusProps}
            />
            {/* Minus Sign initially positioned to the right */}
            <animated.rect
              width="10"
              height="100"
              x="95" // Adjust x position for initial spacing
              y="50"
              style={minusProps}
            />
          </svg>
          <animated.div
            style={textProps}
            className="text-lg mt-4 font-medieval text-inherit"
          >
            Borgar Flaen Stensrud
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
}
