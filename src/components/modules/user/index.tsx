import { useWindowSize } from "hooks/useWindowsize";
import MobileUserDetails from "./mobile";
import DesktopUserDetails from "./desktop";

function UserDetails() {
  const { width } = useWindowSize();

  const returnHeader = () => {
    if (width < 640) {
      return <MobileUserDetails />;
    } else if (width >= 768 && width < 1024) {
      return <h1 className="p-4">Tablet Header</h1>;
    } else {
      return <DesktopUserDetails />;
    }
  };

  return returnHeader();
}

export default UserDetails;
