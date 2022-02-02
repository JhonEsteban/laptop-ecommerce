import { ShoppingCart } from '../../../classes';

import shoppingCartActions from '../../cart/shoppingCartActions';

const laptopCardClickEvent = (shoppingCart: ShoppingCart) => {
  const $cartContainer = document.getElementById(
    'cartContainer'
  ) as HTMLDivElement;

  $cartContainer.addEventListener('click', (e: Event) => {
    shoppingCartActions(e, shoppingCart);
  });
};

export default laptopCardClickEvent;
