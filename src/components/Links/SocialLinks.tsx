import { FC } from 'react';
import Config from '../../config';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHover } from '../../hooks/useHover';

/**
 * @param color uses the tailwind text-color utility to define which color you want to apply to your social links
 * @param height uses the tailwind height utility to define the size you want to apply to the icons
 */
type SocialLinksProps = {
  color?: string;
};

const SocialLinks: FC<SocialLinksProps> = ({ color }: SocialLinksProps) => {
  const height = 'h-5';
  const { socialLinks } = Config;
  const classes = useHover(`mx-4 block ${height}`);

  return (
    <div className="flex items-center">
      {socialLinks.map((link) => (
        <div key={link.url} className="group">
          <Link href={link.url}>
            <a
              target="_blank"
              className="dark:text-cool-gray-100 transform group-hover:text-cool-gray-400 "
            >
              <FontAwesomeIcon
                icon={link.icon}
                className={classes}
                color={`${color}`}
              ></FontAwesomeIcon>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
