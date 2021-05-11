export function useHover(classes: string, customScale?: string) {
  const scale = customScale || 'hover:scale-150';
  const hover = 'transition duration-300 ease-in-out transform';

  return `${hover} ${scale} ${classes} `;
}
