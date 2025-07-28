import Desktop from "components/layouts/AuthenticatedLayout/desktop";
import Mobile from "components/layouts/AuthenticatedLayout/mobile";
import { useWindowSize } from "hooks/useWindowsize";

const AuthenticatedLayout = () => {
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
      return <Mobile />;
    } else if (width > 640) {
      return <h1>Not available on desktop yet</h1>;
    }
  };

  return returnHeader();
};

export default AuthenticatedLayout;
