import Story from "../story";
import { storyProfiles } from "constants/index";

function MobileStories() {
  return (
    <div className="p-3 flex gap-3 overflow-y-scroll w-full">
      {storyProfiles.map((profile) => (
        <Story
          key={profile.id}
          name={profile.name}
          image={profile.image}
          isOwn={profile.isOwn}
        />
      ))}
    </div>
  );
}

export default MobileStories;
