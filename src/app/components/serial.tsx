"use client";

import React from "react";

const SerialComponent = () => {
  const testSerial = async () => {
    console.log("Test serial");
    const port = await navigator.serial
      .requestPort({})
      .catch((e) => console.error(e));
    if (!port) return;
    console.log("port: ", port);
  };

  return (
    <div>
      <button onClick={testSerial}>Test Serial</button>
    </div>
  );
};

export default SerialComponent;
