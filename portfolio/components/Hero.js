import React, { useEffect, useState } from "react";
import Wave from "react-wavify";
import Introduction from "./Introduction";

function Hero() {
    const wave_options = {
        height: 50,
        amplitude: 50,
        speed: 0.3,
        points: 3,
    };

    return (
        <>
            <Introduction />
            <Wave
                className="invisible absolute bottom-0 -z-10 h-2/5 opacity-50 dark:invisible lg:visible"
                fill="#0369a1"
                paused={false}
                options={wave_options}
            />
            <Wave
                className="invisible absolute bottom-0 -z-10 h-2/5 opacity-50 dark:lg:visible"
                fill="#F8D862"
                paused={false}
                options={wave_options}
            />
        </>
    );
}

export default Hero;
