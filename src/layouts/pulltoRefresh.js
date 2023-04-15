import React, { useState } from "react";

const PullToRefresh = ({ onRefresh, isLoading, children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(null);
  const [endY, setEndY] = useState(null);

  const handleTouchStart = (event) => {
    if (isLoading) return;
    setIsDragging(true);
    setStartY(event.touches[0].pageY);
    setEndY(null);
  };

  const handleTouchMove = (event) => {
    if (!isDragging || isLoading) return;
    setEndY(event.touches[0].pageY);
  };

  const handleTouchEnd = () => {
    if (!isDragging || isLoading) return;
    if (endY && endY < startY) onRefresh();
    setIsDragging(false);
    setStartY(null);
    setEndY(null);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ overflowY: "scroll" }}
    >
      {isLoading ? (
        <div className="ptr-preloader">
        <div className="preloader" />
        <div className="ptr-arrow" />
      </div>
      
      ) : (
        children
      )}
    </div>
  );
};

export default PullToRefresh;
