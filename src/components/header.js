import React from "react";
import "./main.css";

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer>@dlsakai</footer>
    </>
  );
};

export default Layout;
