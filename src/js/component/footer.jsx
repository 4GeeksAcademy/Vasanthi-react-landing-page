import React from "react";

const Footer = () => {
  return (
    <div className="d-flex justify-content-center bg-dark text-white p-4">
      Copyright © Movies App {new Date().getFullYear()}
    </div>
  )
}

export default Footer