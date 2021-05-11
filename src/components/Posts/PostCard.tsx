import { FC } from 'react';
import Link from 'next/link';
import { useHover } from '../../hooks/useHover';
import TagList from '../Lists/TagList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDate } from '../../utils/date';

type PostCardProps = {
  tags: string[];
  title: string;
  description: string;
  coverUrl: string;
  date: string;
  id: string;
};

const PostCard: FC<PostCardProps> = ({
  tags,
  title,
  description,
  coverUrl,
  date,
  id,
}: PostCardProps) => {
  const classes = useHover('w-full h-full', 'hover:scale-110');

  return (
    <div className="relative">
      <div className={classes}>
        <img
          src={coverUrl}
          alt=""
          className="object-cover h-auto lg:h-44 w-full"
        />
        <div className="p-4 bg-white dark:bg-cool-gray-800">
          <TagList tags={tags} />
          <h2 className="mt-2 mb-0 text-2xl font-semibold dark:text-cool-gray-100">
            {title}
          </h2>
          <time className="mb-3 text-cool-gray-600 dark:text-cool-gray-300 flex items-center text-sm">
            <FontAwesomeIcon
              className={`mr-2 h-3`}
              icon={faClock}
            ></FontAwesomeIcon>
            {getFormattedDate(date)}
          </time>
          <p className="text-cool-gray-500 dark:text-cool-gray-300">
            {description}
          </p>
        </div>

        <Link href={`./posts/${id}`}>
          <a className="absolute inset-0"></a>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
