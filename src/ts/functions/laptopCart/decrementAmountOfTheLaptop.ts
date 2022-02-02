import { ShoppingCart } from '../../classes';

const decrementAmountOfTheLaptop = (
  element: HTMLElement,
  shoppingCart: ShoppingCart
) => {
  const laptopCard = element.parentElement?.parentElement as HTMLElement;
  const laptopCardId = laptopCard.getAttribute('id') as string;

  shoppingCart.decrementLaptopAmount(laptopCardId);
};

export default decrementAmountOfTheLaptop;
