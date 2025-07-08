import React from "react";

export default function ButtonPage01() {
  return (
    <button
      className="has_fade_anim"
      data-fade-from="top"
      data-fade-offset="50"
      data-delay="0.1"
      data-duration="1.2"
      data-ease="bounce"
      data-on-scroll="1"
      style={{
        display: "flex",
        width: "10.625rem",
        height: "10.625rem",
        padding: "0rem 2.68125rem 0rem 2.69313rem",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5.3125rem",
        background: "#C9F31D",
        color: "#121212",
        textAlign: "center",
        fontFamily: "Kanit",
        fontSize: "1.125rem",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "1.18125rem",
        border: "none",
        cursor: "pointer",
      }}
    >
      Explore us
      <br />
      more
    </button>
  );
}
