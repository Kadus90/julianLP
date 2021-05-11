import { FC } from 'react';

type TagListProps = {
  tags: string[];
};

const TagList: FC<TagListProps> = ({ tags }: TagListProps) => {
  console.log(tags);

  const tagArray = tags.map((tag, i) => {
    return (
      <span
        key={i}
        className="bg-cool-gray-700 text-white mr-2 rounded-lg py-1 px-2 text-sm"
      >
        {tag}
      </span>
    );
  });

  return <p className="flex">{tagArray}</p>;
};

export default TagList;
