import React from "react";
import { Link } from "react-router-dom";

export const Logo = ({ logotext = "Logo Text" }) => {
  return (
    <Link to="/" className="link icon-only newsman-notification">
      <div
        style={{
          background: "black",
          color: "white",
          height: 34,
          width: 34,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          fontSize: 14,
          fontWeight: "bold",
        }}
      >
        B2
      </div>
    </Link>
  );
};
