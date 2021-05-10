import { FC, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHover } from '../../hooks/useHover';

const ThemeButton: FC = () => {
  const height = 'h-5';
  const { theme, setTheme } = useTheme();
  const [symbol, setSymbol] = useState(theme === 'dark' ? faSun : faMoon);
  const [color, setColor] = useState(theme === 'dark' ? '#FACB33' : '#3366CC');

  const classes = useHover(`mx-4 block ${height} cursor-pointer`);

  useEffect(() => {
    setSymbol(theme === 'dark' ? faSun : faMoon);
    setColor(theme === 'dark' ? '#FACB33' : '#3366CC');
  }, [theme]);

  return (
    <FontAwesomeIcon
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      icon={symbol}
      className={classes}
      color={`${color}`}
    ></FontAwesomeIcon>
  );
};

export default ThemeButton;
