import React from "react";
import cn from "classnames";
import { Phase, useTypeWriter } from "../hooks/useTypeWriter";

function TypeWriter(typingWords) {
    const { currentText, selectedWords, phase } = useTypeWriter(typingWords);
    return (
        <h2 className="text-2xl">
            I am a{" "}
            <span
                className={cn("text-lightBlue", {
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
