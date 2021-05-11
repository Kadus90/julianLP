import { FC } from 'react';
import { getBackgroundClass } from '../../utils/theme';
import { useHover } from '../../hooks/useHover';

type TagListProps = {
  tags: string[];
  theme: string;
};

const TagList: FC<TagListProps> = ({ tags, theme }: TagListProps) => {
  console.log(tags);

  const tagArray = tags.map((tag, i) => {
    const classes = `text-white mr-2 rounded-lg py-1 px-2 text-sm ${getBackgroundClass(
      theme,
    )}`;
    return (
      <span key={i} className={useHover(classes, 'hover:scale-110')}>
        {tag}
      </span>
    );
  });

  return <p className="flex">{tagArray}</p>;
};

export default TagList;
