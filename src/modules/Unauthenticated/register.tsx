import DesktopRegister from "components/modules/Unauthenticated/register/desktop";
import MobileRegister from "components/modules/Unauthenticated/register/mobile";
import { useWindowSize } from "hooks/useWindowsize";

function Register() {
  const { width } = useWindowSize();

  const returnHeader = () => {
    if (width < 640) {
      return <MobileRegister />;
    } else if (width >= 768 && width < 1024) {
      return <h1 className="p-4">Tablet Header</h1>;
    } else {
      return <DesktopRegister />;
    }
  };

  return returnHeader();
}

export default Register;
