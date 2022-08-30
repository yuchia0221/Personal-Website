import React from "react";
import cn from "classnames";
import { Phase, useTypeWriter } from "../hooks/useTypeWriter";

function TypeWriter({ typingWords, textColor }) {
    const { currentText, selectedWords, phase } = useTypeWriter({ typingWords: typingWords });
    return (
        <h2 className="font-mono md:text-5xl">
            I am a{" "}
            <span
                className={cn(textColor, "font-semibold", {
                    ["end-cursor"]: phase !== Phase.Deleting,
                    ["blinking"]: phase === Phase.Pausing,
                })}
                aria-label={selectedWords}>
                {currentText}
            </span>
        </h2>
    );
}

export default TypeWriter;
