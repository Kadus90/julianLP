import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { NavbarLinkProps } from './components/Navbar/NavbarLink';

type SocialLinkProps = {
  icon: IconProp;
  url: string;
};

type ConfigProps = {
  socialLinks: SocialLinkProps[];
  navbarLinks: NavbarLinkProps[];
  blogDescription: string;
};

const Config: ConfigProps = {
  socialLinks: [
    {
      icon: faInstagram,
      url: 'https://www.instagram.com/kadus90/',
    },
    {
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/julian-phillips/',
    },
    {
      icon: faTwitter,
      url: 'https://twitter.com/Kadus90',
    },
  ],
  navbarLinks: [
    // {
    //   text: 'Home',
    //   href: '#',
    // },
  ],
  blogDescription: 'Welcome to my corner of the internet',
};

export default Config;
