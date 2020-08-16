import React from "react";
import "./main.css";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

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
        <header
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <div
            style={{
              background: `#000022`,
              padding: `8px`,
              width: `60%`,
              margin: "10px",
            }}
          >
            <h1
              style={{
                color: `#99FFFF`,
                fontStretch: `italic`,
                border: `solid`,
                background: `#000022`,
                border_color: `#99FFFF`,
                padding: `3px`,
                margin: `10px`,
              }}
            >
              <Link className={"title"} to={`/`}>
                札幌情報デスク
              </Link>
            </h1>
          </div>
        </header>
        <main>{children}</main>
      </div>
      <footer
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        @dlsakai
      </footer>
    </>
  );
};

export default Layout;
