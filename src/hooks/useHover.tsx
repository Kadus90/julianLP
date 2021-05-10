export function useHover(classes: string) {
  const hoverScale =
    'transition duration-300 ease-in-out transform hover:scale-150';

  return `${hoverScale} ${classes}`;
}
