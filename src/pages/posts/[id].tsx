import { FC } from 'react';
import { PostMetadata } from '../../types/PostMetadata';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostsIds, getPostData, getPostsBySeries } from '../../lib/posts';
import { ParsedUrlQuery } from 'querystring';
import { getProseClass } from '../../utils/theme';
import PostHeader from '../../components/Posts/PostHeader';

interface PostProps {
  post: PostMetadata;
  related: PostMetadata[];
}

const Post: FC<PostProps> = ({ post, related }: PostProps) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="max-w-3xl md:mt-6 rounded-xl mx-auto bg-white dark:bg-cool-gray-700">
        <img
          src={post.coverUrl}
          alt=""
          className="object-cover w-full h-auto"
        />
        <div className="p-8">
          <PostHeader post={post} />
          <div
            className={`prose ${getProseClass(
              post.theme,
            )} max-w-3xl mx-auto dark:text-cool-gray-300`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </article>
    </>
  );
};

const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps<PostProps, Params> = async (context) => {
  const params = context.params as Params;
  console.log(params.id);
  const post = await getPostData(params.id);
  const related = await getPostsBySeries(post.series);

  return {
    props: { post, related },
  };
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export default Post;
export { getStaticPaths, getStaticProps };
