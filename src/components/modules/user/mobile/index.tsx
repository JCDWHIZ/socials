import PostGrid from "components/Tabs/postGrid";
import TabSwitcher from "components/Tabs/TabSwitcher";
import { BiGlobe } from "react-icons/bi";
import { BsBell, BsCamera } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiCamera, CiMountain1 } from "react-icons/ci";
import { FaInfoCircle, FaVideo, FaBookmark, FaCamera } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { ImSpoonKnife } from "react-icons/im";
import { SiHelium } from "react-icons/si";

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
    <div className="max-w-md mx-auto bg-white min-h-screen text-sm text-black">
      {/* Top Username Bar */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
        <h1 className="font-semibold text-lg">username</h1>
        <div className="flex gap-4 items-center">
          <BsBell className="text-xl" />
          <FiMoreHorizontal className="text-xl" />
        </div>
      </div>

      
      <div className="px-4 py-5">
        <div className="flex items-center gap-6">
         
          <img
            src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          
          <div className="flex justify-between flex-1">
            <div className="text-center">
              <p className="font-bold text-base">12</p>
              <p className="text-gray-500 text-xs">Posts</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-base">200</p>
              <p className="text-gray-500 text-xs">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-base">180</p>
              <p className="text-gray-500 text-xs">Following</p>
            </div>
          </div>
        </div>

        <p className="mt-3 font-semibold">Username</p>

        <div className="text-[13px] text-gray-800 mt-1 space-y-1">
          <div className="flex items-start gap-1">
            <BsCamera className="mt-0.5" />
            <p>Travel & Photography Enthusiast</p>
          </div>
          <div className="flex items-start gap-1">
            <BiGlobe className="mt-0.5" />
            <p>Currently exploring: Colorado, USA</p>
          </div>
          <div className="flex items-start gap-1">
            <SiHelium className="mt-0.5" />
            <p>Capturing moments that matter</p>
          </div>
          <p
            className="text-blue-500"
          >
            www.username.com
          </p>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="flex gap-2">
          <button className="flex-1 py-1.5 rounded-md bg-black text-white border border-gray-300 font-medium text-sm">
            Follow
          </button>
          <button className="flex-1 py-1.5 rounded-md border border-gray-300 font-medium text-sm">
            Message
          </button>
          <button className="w-9 h-9 rounded-md border border-gray-300 flex items-center justify-center">
            <CgProfile className="text-lg" />
          </button>
        </div>
      </div>
      <div className="flex gap-3 ml-10 mb-5">
        <div className="bg-gray-400 w-10 py-[10px] px-2.5 text-2xl h-10 rounded-full"><CiMountain1 size={20}/></div>
        <div className="bg-gray-400 w-10 py-[10px] px-2.5 text-2xl h-10 rounded-full"><CiCamera size={20}/></div>
        <div className="bg-gray-400 w-10 py-[10px] px-2.5 text-2xl h-10 rounded-full"><ImSpoonKnife size={20}/></div>
      </div>

      <TabSwitcher tabs={tabs} />
    </div>
  );
}

export default MobileUserDetails;
