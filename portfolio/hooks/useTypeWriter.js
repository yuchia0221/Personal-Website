import { useState, useEffect } from "react";

function makeEnum(arr) {
    let obj = {};
    for (let val of arr) {
        obj[val] = Symbol(val);
    }
    return Object.freeze(obj);
}

const TYPING_INTERVAL_MIN = 80;
const TYPING_INTERVAL_MAX = 150;
const TYPING_PAUSE_MS = 2000;
const DELETING_INTERVAL = 50;
const DELETING_PAUSE_MS = 800;

const getRandomTypingInterval = () =>
    Math.floor(Math.random() * (TYPING_INTERVAL_MAX - TYPING_INTERVAL_MIN + 1)) + TYPING_INTERVAL_MIN;

export const Phase = makeEnum(["Typing", "Pausing", "Deleting"]);

export const useTypeWriter = ({ typingWords }) => {
    const [index, setIndex] = useState(0);
    const [phase, setPhase] = useState(Phase.Typing);
    const [currentText, setCurrentText] = useState("");
    useEffect(() => {
        switch (phase) {
            case Phase.Typing: {
                const nextTypeWord = typingWords[index].slice(0, currentText.length + 1);

                if (nextTypeWord === currentText) {
                    setPhase(Phase.Pausing);
                    return;
                }

                const timeout = setTimeout(() => {
                    setCurrentText(nextTypeWord);
                }, getRandomTypingInterval());

                return () => clearTimeout(timeout);
            }
            case Phase.Deleting: {
                if (!currentText) {
                    const timeout = setTimeout(() => {
                        const nextIndex = index + 1;
                        setPhase(Phase.Typing);
                        setIndex(typingWords[nextIndex] ? nextIndex : 0);
                    }, DELETING_PAUSE_MS);
                    return () => clearTimeout(timeout);
                }
                const nextRemaining = typingWords[index].slice(0, currentText.length - 1);
                const timeout = setTimeout(() => {
                    setCurrentText(nextRemaining);
                }, DELETING_INTERVAL);

                return () => clearTimeout(timeout);
            }
            case Phase.Pausing:
            default: {
                const timeout = setTimeout(() => {
                    setPhase(Phase.Deleting);
                }, TYPING_PAUSE_MS);

                return () => clearTimeout(timeout);
            }
        }
    }, [typingWords, currentText, phase, index]);

    return { currentText, phase, selectedWords: typingWords[index] };
};
