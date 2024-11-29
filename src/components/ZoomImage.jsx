import React, { useRef } from "react";
import "./styles/ZoomImage.css";

const ZoomImage = ({ src, alt }) => {
    const imageRef = useRef(null);

    const handleMouseEnter = () => {
        imageRef.current.style.transform = "scale(1.2)";
    };

    const handleMouseLeave = () => {
        imageRef.current.style.transform = "scale(1)";
    };

    return (
        <img
            ref={imageRef}
            src={src}
            alt={alt}
            className="zoom-image"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );
};

export default ZoomImage;
