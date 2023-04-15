import React, { useState } from "react";

const TextSizeController = ({ themeSwitcher, updateTextSize }) => {
  const [textSize, setTextSize] = useState(14);

  const increaseTextSize = () => {
    if (textSize < 19) {
      setTextSize(textSize + 1);
      updateTextSize(`${textSize + 1}px`);
    }
  };

  const decreaseTextSize = () => {
    if (textSize > 14) {
      setTextSize(textSize - 1);
      updateTextSize(`${textSize - 1}px`);
    }
  };

  return (
    <div
      className="toolbar tabbar tabbar-icons toolbar-bottom fab-morph-target fab-morph-target-visible"
      style={{ opacity: 1, transform: "scale(1, 1)" }}
    >
      <div className="toolbar-inner">
        <a className="tab-link tab-link-active" >
          <i className="icon material-icons md-only">email</i>
          <span className="tabbar-label">Dark Light Theme</span>
        </a>
        <a className="tab-link" onClick={decreaseTextSize}>
          <i className="icon material-icons md-only">today</i>
          <span className="tabbar-label">Text -</span>
        </a>
        <a className="tab-link" onClick={increaseTextSize}>
          <i className="icon material-icons md-only">file_upload</i>
          <span className="tabbar-label">Text +</span>
        </a>
        <span
          className="tab-link-highlight"
          style={{
            width: "33.3333%",
            transform: "translate3d(0%, 0px, 0px)",
          }}
        ></span>
      </div>
    </div>
  );
};

export default TextSizeController;
