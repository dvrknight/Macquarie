import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageMetadata = (defaultTitle, defaultFavicon, routeMetadata) => {
  const location = useLocation();

  useEffect(() => {
    const title = routeMetadata[location.pathname]?.title || defaultTitle;
    const favicon = routeMetadata[location.pathname]?.favicon || defaultFavicon;

    document.title = title;

    const faviconElement = document.querySelector("link[rel='icon']") || document.createElement("link");
    faviconElement.rel = "icon";
    faviconElement.href = favicon;
    
    document.head.appendChild(faviconElement);
  }, [location.pathname, defaultTitle, defaultFavicon, routeMetadata]);
};

export default usePageMetadata;
