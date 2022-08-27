import React, { useEffect } from "react";
import { render } from "react-dom";
import { paper, Path, Point, view } from "paper";

function Canvas() {
    useEffect(() => {
        paper.setup("splash");
        new paper.Path.Circle({
            center: paper.view.center,
            radius: 50,
            fillColor: "orange",
        });
        view.draw();
    });
    return <canvas className="bg-slate-500 h-full w-full" id="splash" data-paper-resize />;
}

export default Canvas;
