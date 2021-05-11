import { FC } from 'react';
import Head from 'next/head';
import PostList from '../components/Posts/PostList';
import { PostMetadata } from '../types/PostMetadata';
import { GetStaticProps } from 'next';
import { getPostsData } from '../lib/posts';

const Home: FC<HomeProps> = (props: HomeProps) => {
  const { posts } = props;
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <Head>
        <title>JulianLP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div className="mt-4">
            <PostList items={posts} />
          </div>
        </div>
      </main>
    </div>
  );
};

type HomeProps = {
  posts: PostMetadata[];
};

const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const posts = getPostsData();
  return {
    props: { posts },
  };
};

export default Home;
export { getStaticProps };
