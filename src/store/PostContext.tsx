import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { PostType } from "../type/PostType";

interface PostContextType {
  post: PostType | null;
  setPost: Dispatch<SetStateAction<PostType | null>>;
}

export const PostContext = createContext<PostContextType>({
  post: null,
  setPost: () => {},
});

export const PostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [post, setPost] = useState<PostType | null>(null);

  const value = {
    post,
    setPost,
  };

  return (
    <PostContext.Provider value={value}>
      {children}
    </PostContext.Provider>
  );
};