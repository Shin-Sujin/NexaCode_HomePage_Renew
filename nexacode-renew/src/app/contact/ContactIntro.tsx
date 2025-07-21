import React from "react";

export default function ContactIntro() {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-3">Contact us</h2>
      <p className="mb-2">
        Need to get in touch with us? Either fill out the form with your inquiry
        or find the{" "}
        <a
          href="mailto:department@email.com"
          className="text-[#6C47FF] underline"
        >
          department email
        </a>{" "}
        you’d like to contact below.
      </p>
    </div>
  );
}
