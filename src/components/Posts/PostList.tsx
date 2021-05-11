import { FC } from 'react';
import { PostMetadata } from '../../types/PostMetadata';
import PostCard from './PostCard';

interface PostListProps {
  items: PostMetadata[];
}

const PostList: FC<PostListProps> = (props: PostListProps) => {
  const { items } = props;

  return (
    <div className="mt-8">
      <h1 className="text-4xl mb-4 tracking-tight font-extrabold">
        Recent <span className="text-blue-700">posts</span>
      </h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 grid-flow-row auto-rows-fr">
        {items.map((item, i) => (
          <PostCard key={i} {...item}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default PostList;
