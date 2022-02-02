import { ShoppingCart } from '../../classes';

const incrementAmountOfTheLaptop = (
  element: HTMLElement,
  shoppingCart: ShoppingCart
) => {
  const laptopCard = element.parentElement?.parentElement as HTMLElement;
  const laptopCardId = laptopCard.getAttribute('id') as string;

  shoppingCart.incrementLaptopAmount(laptopCardId);
};

export default incrementAmountOfTheLaptop;
