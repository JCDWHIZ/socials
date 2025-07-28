import DesktopLogin from "components/modules/Unauthenticated/login/desktop";
import MobileLogin from "components/modules/Unauthenticated/login/mobile";
import { useWindowSize } from "hooks/useWindowsize";

function Login() {
  const { width } = useWindowSize();

  const returnHeader = () => {
    if (width < 640) {
      return <MobileLogin />;
    } else if (width >= 768 && width < 1024) {
      return <h1 className="p-4">Tablet Header</h1>;
    } else {
      return <DesktopLogin />;
    }
  };

  return returnHeader();
}

export default Login;
