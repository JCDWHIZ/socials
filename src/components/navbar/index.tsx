import { Link, useLocation } from "react-router-dom";
import { IoHome, IoSearch, IoHeart } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { FaUserCog } from "react-icons/fa";

const navItems = [
  { label: "Home", icon: IoHome, path: "/" },
  { label: "Search", icon: IoSearch, path: "/search" },
  { label: "Create", icon: FiPlusCircle, path: "/create" },
  { label: "Activity", icon: IoHeart, path: "/activity" },
  { label: "Profile", icon: FaUserCog, path: "/profile" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md border-t border-gray-200">
      <div className="flex justify-around items-center py-2">
        {navItems.map(({ label, icon: Icon, path }) => {
          const isActive = location.pathname === path;

          return (
            <Link
              to={path}
              key={label}
              className={`flex flex-col items-center text-xs transition ${
                isActive
                  ? "text-black font-semibold"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <Icon size={22} />
              <span className="mt-1">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
