import { FunctionComponent, useContext, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThemeButton: FunctionComponent = () => {
  const height = 'h-5';
  const { theme, setTheme } = useTheme();
  const [symbol, setSymbol] = useState(theme === 'dark' ? faSun : faMoon);
  const [color, setColor] = useState(theme === 'dark' ? '#FACB33' : '#3366CC');

  useEffect(() => {
    setSymbol(theme === 'dark' ? faSun : faMoon);
    setColor(theme === 'dark' ? '#FACB33' : '#3366CC');
  }, [theme]);

  return (
    <FontAwesomeIcon
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      icon={symbol}
      className={`mx-4 block ${height} cursor-pointer`}
      color={`${color}`}
    ></FontAwesomeIcon>
  );
};

export default ThemeButton;
