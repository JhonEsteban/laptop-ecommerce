import { ShoppingCart } from '../../classes';

const deleteLaptopFromCart = (
  element: HTMLElement,
  shoppingCart: ShoppingCart
) => {
  const laptopCard = element.parentElement as HTMLElement;
  const laptopCardId = laptopCard.getAttribute('id') as string;

  shoppingCart.deleteLaptopFromCart(laptopCardId);
};

export default deleteLaptopFromCart;
