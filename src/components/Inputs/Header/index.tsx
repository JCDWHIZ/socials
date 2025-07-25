import { useWindowSize } from "hooks/useWindowsize";
import DesktopHeader from "./desktop";
import MobileHeader from "./mobile";

function Header() {
  const { width } = useWindowSize();

  const returnHeader = () => {
    if (width < 640) {
      return <MobileHeader />;
    } else if (width >= 768 && width < 1024) {
      return <h1 className="p-4">Tablet Header</h1>;
    } else {
      return <DesktopHeader />;
    }
  };

  return returnHeader();
}

export default Header;
