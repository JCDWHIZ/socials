import MobileHome from "components/modules/home/mobile";
import { useWindowSize } from "hooks/useWindowsize";

function Home() {
  const { width } = useWindowSize();

  const returnHeader = () => {
    if (width < 640) {
      return <MobileHome />;
    } else if (width >= 768 && width < 1024) {
      return <h1 className="p-4">Tablet Header</h1>;
    } else {
      // return <DesktopPost />;
      return "hellw";
    }
  };

  return returnHeader();
}

export default Home;
