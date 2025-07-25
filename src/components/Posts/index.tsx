import { useWindowSize } from "hooks/useWindowsize";
import DesktopPost from "./desktop";
import MobilePost from "./mobile";

function Post() {
  const { width } = useWindowSize();

  const returnHeader = () => {
    if (width < 640) {
      return <MobilePost />;
    } else if (width >= 768 && width < 1024) {
      return <h1 className="p-4">Tablet Header</h1>;
    } else {
      return <DesktopPost />;
    }
  };

  return returnHeader();
}

export default Post;
