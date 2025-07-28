import PostGrid from "components/Tabs/postGrid";
import TabSwitcher from "components/Tabs/TabSwitcher";
import { FaInfoCircle, FaVideo, FaBookmark, FaCamera } from "react-icons/fa";

const postsTab = ["Post 1", "Post 2", "Post 3"];
const videoTab = ["Video 1", "Video 2"];
const savedTab = ["Saved 1", "Saved 2", "Saved 3", "Saved 4"];

function MobileUserDetails() {
  const tabs = [
    {
      id: "posts",
      icon: FaInfoCircle,
      content: <PostGrid posts={postsTab} />,
    },
    {
      id: "videos",
      icon: FaVideo,
      content: <PostGrid posts={videoTab} />,
    },
    {
      id: "saved",
      icon: FaBookmark,
      content: <PostGrid posts={savedTab} />,
    },
    {
      id: "camera",
      icon: FaCamera,
      content: (
        <div className="text-center py-10 text-gray-600">No media yet</div>
      ),
    },
  ];

  return (
    <div className="max-w-md mx-auto">
      <TabSwitcher tabs={tabs} />
    </div>
  );
}

export default MobileUserDetails;
