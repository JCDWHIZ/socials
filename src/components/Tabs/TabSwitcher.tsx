import React, { useState, type ReactNode } from "react";
import type { IconType } from "react-icons";

type TabItem = {
  id: string;
  icon: IconType;
  content: ReactNode;
};

interface Props {
  tabs: TabItem[];
}

const TabSwitcher: React.FC<Props> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div className="flex justify-around border-b border-gray-200 bg-white">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 flex justify-center items-center ${
                isActive
                  ? "border-t-2 border-black text-black"
                  : "text-gray-400"
              }`}
            >
              <Icon size={20} />
            </button>
          );
        })}
      </div>

      <div className="mt-4">
        {tabs.find((t) => t.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabSwitcher;
