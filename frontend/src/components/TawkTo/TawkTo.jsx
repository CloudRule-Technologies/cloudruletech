import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    if (window.Tawk_API) return; // prevent duplicate load

    window.Tawk_API = {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/69845b963a9b531c2c392c35/1jgmgbhun";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);
  }, []);

  return null;
};

export default TawkTo;
