const PostCard: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600 mt-2">{content}</p>
    </div>
  );
};

export default PostCard;
