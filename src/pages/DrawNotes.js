import React, { useState, useRef } from "react";
import { HeaderTop } from "../components";
import { BasicLayout } from "../layouts/basicLayout";
import { Stage, Layer, Line } from "react-konva";

const DrawNotes = () => {
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);

  const handleMouseDown = () => {
    isDrawing.current = true;
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    setLines((currentLines) => [
      ...currentLines,
      { points: [point.x, point.y] },
    ]);
  };

  return (
    <BasicLayout>
      <HeaderTop />
      <div className="b2-block">
        {/* ... */}
        <div className="b2-block-content">
          {/* ... */}
          <div className="canvas-container">
            <Stage
              width={600}
              height={400}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <Layer>
                {lines.map((line, i) => (
                  <Line
                    key={i}
                    points={line.points}
                    stroke="#000"
                    strokeWidth={5}
                    tension={0.5}
                    lineCap="round"
                    globalCompositeOperation="source-over"
                  />
                ))}
              </Layer>
            </Stage>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default DrawNotes;
