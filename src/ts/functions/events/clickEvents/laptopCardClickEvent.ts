import { ShoppingCart } from '../../../classes';
import { LaptopCartButton } from '../../../interfaces';

import deleteLaptopFromCart from '../../laptop/deleteLaptopFromCart';
import incrementAmountOfTheLaptop from '../../laptop/incrementAmountOfTheLaptop';
import decrementAmountOfTheLaptop from '../../laptop/decrementAmountOfTheLaptop';

const options: LaptopCartButton = {
  deleteButton: 'cart-product__close',
  incrementButton: 'options__one',
  decrementButton: 'options__two',
};

const laptopCardClickEvent = (shoppingCart: ShoppingCart) => {
  const $cartContainer = document.getElementById(
    'cartContainer'
  ) as HTMLDivElement;

  $cartContainer.addEventListener('click', (e: Event) => {
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
  });
};

export default laptopCardClickEvent;
