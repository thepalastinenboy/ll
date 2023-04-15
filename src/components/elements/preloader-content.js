import React from "react";

const PreloaderContent = () => {
  return (
    <div id="preloader-container">
  <div id="preloader-content">
    <div id="preloader-title" className="preloader-shimmer" />
    <div id="preloader-desc">
      <div className="preloader-line preloader-shimmer" />
      <div className="preloader-line preloader-shimmer" />
      <div className="preloader-line preloader-shimmer" />
      <div className="preloader-line preloader-shimmer" />
    </div>
  </div>
</div>

  );
};

export default PreloaderContent ;
