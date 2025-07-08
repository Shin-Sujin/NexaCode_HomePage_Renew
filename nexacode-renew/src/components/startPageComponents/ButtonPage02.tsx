import React from "react";

export default function ButtonPage02() {
  return (
    <button
      className="has_fade_anim mr-24"
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
        background: "#FFFFFF",
        color: "#121212",
        textAlign: "center",
        fontFamily: "Kanit",
        fontSize: "1.125rem",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "1.18125rem",
        border: "0.5px solid #666666",
        cursor: "pointer",
      }}
    >
      Explore all
      <br />
      services
    </button>
  );
}
