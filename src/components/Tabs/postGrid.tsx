interface Props {
  posts: string[];
}

const PostGrid: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grid grid-cols-3 gap-1 p-1">
      {posts.map((post, i) => (
        <div
          key={i}
          className="bg-gray-600 text-white h-32 flex items-center justify-center text-sm"
        >
          {post}
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
