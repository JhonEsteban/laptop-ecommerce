const getLaptopId = (element: HTMLElement): string => {
  const typeOfButton = element.classList[0];
  let laptopCard: HTMLElement;

  if (typeOfButton !== 'laptop-button') {
    laptopCard = element.parentElement?.parentElement as HTMLElement;
  } else {
    laptopCard = element.parentElement as HTMLElement;
  }

  return laptopCard.getAttribute('id') as string;
};

export default getLaptopId;
