import React from "react";

const NavigationDots = ({slides, activeIndex}) => {
    return (
        <div className="navigation-dots">
            {slides.map((slide, index) => (
                <div
                    key={slide + index}
                    className={`dot ${index === activeIndex && "active"}`}
                />
            ))}
        </div>
    );
}
export default  NavigationDots;