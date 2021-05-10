import { FunctionComponent } from 'react';
import Config from '../../config';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * @param color uses the tailwind text-color utility to define which color you want to apply to your social links
 * @param height uses the tailwind height utility to define the size you want to apply to the icons
 */
type SocialLinksProps = {
  color?: string;
  height?: string;
};

const SocialLinks: FunctionComponent<SocialLinksProps> = (props) => {
  const { height = 'h-5', color } = props;
  const { socialLinks } = Config;
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
                className={`mx-4 block ${height} transform group-hover:scale-150 transition duration-300 ease-in-out`}
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
