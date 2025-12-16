import React, { useEffect } from "react";

const DisableZoom = () => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content =
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
    document.getElementsByTagName("head")[0].appendChild(meta);
  }, []);

  return null;
};

export default DisableZoom;
