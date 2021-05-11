import { FC, useState } from 'react';
import Config from '../../config';
import NavbarLink from './NavbarLink';
import HamburgerMenu from './HamburgerMenu';
import SiteLogo from '../Logo/SiteLogo';
import SocialLinks from '../Links/SocialLinks';
import { useTheme } from 'next-themes';
import ThemeButton from '../Buttons/ThemeButton';
import Link from 'next/link';

type NavbarProps = {
  showLinks?: boolean;
};
const Navbar: FC<NavbarProps> = (props: NavbarProps) => {
  const { showLinks = true } = props;
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      <nav className="bg-cool-gray-300 dark:bg-cool-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {showLinks && (
                <HamburgerMenu
                  handleOnTap={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
                />
              )}
            </div>
            <div className="flex-1 flex items-center justify-center sm:justify-start">
              {/* <SiteLogo /> */}
              <Link href="/">
                <a>
                  <h1 className="text-4xl tracking-tight font-extrabold">
                    Julian<span className="text-lightBlue-700">LP</span>
                  </h1>
                </a>
              </Link>
              {/* Nav buttons for desktop */}
              <div className="hidden sm:block sm:ml-6 flex-1">
                {showLinks && (
                  <div className="flex space-x-4">
                    {Config.navbarLinks.map((link) => (
                      <NavbarLink
                        key={link.href}
                        type="DESKTOP"
                        text={link.text}
                        href={link.href}
                      ></NavbarLink>
                    ))}
                  </div>
                )}
              </div>
              <ThemeButton />
              <div className="hidden md:block">
                <SocialLinks
                  color={theme === 'light' ? 'dark' : 'light'}
                ></SocialLinks>
              </div>
            </div>
          </div>
        </div>

        {/* Nav buttons for mobile */}
        {showLinks && (
          <div className={mobileMenuIsOpen ? 'block' : 'hidden'}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {Config.navbarLinks.map((link) => (
                <NavbarLink
                  key={link.href}
                  type="MOBILE"
                  text={link.text}
                  href={link.href}
                ></NavbarLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
