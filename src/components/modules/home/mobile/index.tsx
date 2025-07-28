import Post from "components/Posts";
import MobilePost from "components/Posts/mobile";
import Stories from "components/stories";
import { posts } from "constants/index";

function MobileHome() {
  return (
    <div>
      <div className="w-full">
        <Stories />
      </div>
      {posts.map((post) => (
        <MobilePost
          key={post.id}
          name={post.name}
          caption={post.caption}
          images={post.images}
          comments={post.comments}
        />
      ))}
    </div>
  );
}

export default MobileHome;
