const verifyIsTypeLaptopButton = (element: HTMLElement): boolean => {
  const clasess: string[] = [
    'laptop-button',
    'laptop-button__text',
    'laptop-button__image',
  ];

  return (
    element.classList.contains(clasess[0]) ||
    element.classList.contains(clasess[1]) ||
    element.classList.contains(clasess[2])
  );
};

export default verifyIsTypeLaptopButton;
