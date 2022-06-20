import React, { useEffect } from "react";

const useScript = (url: string) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

const FetchKayakAPI = () => {
  useScript(""https://www.kayak.com/affiliate/widget-v2.js"");
  KAYAK.embed({
    container: containerElem /* more options */,
  });

  // rest of your component
};
