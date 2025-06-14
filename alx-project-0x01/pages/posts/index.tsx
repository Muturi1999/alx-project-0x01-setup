// pages/posts/index.tsx

import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostProps, PostData } from "@/interfaces";
import { useState } from "react";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [post, setPost] = useState<PostData | null>(null);

  const [postList, setPostList] = useState<PostProps[]>(posts);

  const handleAddPost = (newPost: PostData) => {
    const newPostWithId = { ...newPost, id: postList.length + 1 };
    setPostList([newPostWithId, ...postList]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {postList.map(({ title, body, userId, id }: PostProps, key: number) => (
            <PostCard
              key={key}
              title={title}
              body={body}
              userId={userId}
              id={id}
            />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
