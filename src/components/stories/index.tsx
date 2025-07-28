import { useWindowSize } from "hooks/useWindowsize";
import React from "react";
import MobileStories from "./mobile";

function Stories() {
  const { width } = useWindowSize();

  const returnHeader = () => {
    if (width < 640) {
      return <MobileStories />;
    } else if (width >= 768 && width < 1024) {
      return <h1 className="p-4">Tablet Header</h1>;
    } else {
      // return <DesktopPost />;
      return "hellw";
    }
  };

  return returnHeader();
}

export default Stories;
