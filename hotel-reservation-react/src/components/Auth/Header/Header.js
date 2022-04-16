import React from "react";

const Header = ({ heading }) => {
  return (
    <div style={{ marginTop: "-12px" }}>
      <h2
        className="mx-4"
        style={{
          fontFamily: "Bookman, URW Bookman L, serif",
          fontStyle: "italic",
        }}
      >
        {heading}
      </h2>
      <hr className="mb-4"></hr>
    </div>
  );
};

export default Header;
