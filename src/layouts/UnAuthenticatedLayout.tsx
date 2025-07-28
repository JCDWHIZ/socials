import MobileUnAuthenticatedLayout from "components/layouts/UnauthenticaedLayout/mobile";
import { useWindowSize } from "hooks/useWindowsize";

function UnAuthenticatedLayout() {
  const { width } = useWindowSize();

  // const returnHeader = () => {
  //   if (width < 640) {
  //     return <Mobile />;
  //   } else if (width >= 768 && width < 1024) {
  //     return <h1 className="p-4">Tablet Header</h1>;
  //   } else {
  //     return <Desktop />;
  //   }
  // };
  const returnHeader = () => {
    if (width < 640) {
      return <MobileUnAuthenticatedLayout />;
    } else if (width > 640) {
      return <h1>Not available on desktop yet</h1>;
    }
  };

  return returnHeader();
}

export default UnAuthenticatedLayout;
