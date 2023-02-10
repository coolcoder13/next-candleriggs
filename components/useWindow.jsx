import React, { useState, useEffect, useMemo } from "react";

export default function useWindow() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: 1280,
    dynamicHeight: 1280,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    setDimension();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const screen = useMemo(
    () =>
      screenSize.dynamicWidth < 600
        ? "mobile"
        : screenSize.dynamicWidth < 900
        ? "tab"
        : "laptop",
    [screenSize]
  );

  return {
    width: screen,
  };
}
