import { LaptopCartButton } from '../../interfaces';
import { ShoppingCart } from '../../classes';

import decrementAmountOfTheLaptop from '../laptopCart/decrementAmountOfTheLaptop';
import deleteLaptopFromCart from '../laptopCart/deleteLaptopFromCart';
import incrementAmountOfTheLaptop from '../laptopCart/incrementAmountOfTheLaptop';

const options: LaptopCartButton = {
  deleteButton: 'cart-product__close',
  incrementButton: 'options__one',
  decrementButton: 'options__two',
};

const shoppingCartActions = (e: Event, shoppingCart: ShoppingCart) => {
  const element = e.target as HTMLElement;
  const typeOfButton = element.classList[0];

  switch (typeOfButton) {
    case options.deleteButton:
      deleteLaptopFromCart(element, shoppingCart);
      break;
    case options.incrementButton:
      incrementAmountOfTheLaptop(element, shoppingCart);
      break;
    case options.decrementButton:
      decrementAmountOfTheLaptop(element, shoppingCart);
      break;

    default:
      break;
  }
};

export default shoppingCartActions;
