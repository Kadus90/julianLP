import { FunctionComponent, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const SiteLogo: FunctionComponent = () => {
  const { theme } = useTheme();
  const darkLogo = '/julianlp-logo-dark.png';
  const lightLogo = '/julianlp-logo-light.png';
  const [logo, setLogo] = useState(theme === 'dark' ? darkLogo : lightLogo);

  useEffect(() => {
    setLogo(theme === 'dark' ? darkLogo : lightLogo);
  }, [theme]);

  return (
    <div className="flex-shrink-0 flex items-center">
      {/* Logo for Mobile */}
      <a href="/">
        <img
          className="block lg:hidden h-10 w-auto"
          src={logo}
          alt="Workflow"
        />
      </a>
      {/* Logo for desktop */}
      <a href="/">
        <img
          className="hidden lg:block h-32 w-auto"
          src={theme === 'dark' ? darkLogo : lightLogo}
          alt="Workflow"
        />
      </a>
    </div>
  );
};

export default SiteLogo;
