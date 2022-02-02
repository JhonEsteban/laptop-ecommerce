import { ShoppingCart } from '../../../classes';

const cartButtonClickEvent = (shoppingCart: ShoppingCart) => {
  const $clearCartButton = document.getElementById(
    'clearCart'
  ) as HTMLButtonElement;

  $clearCartButton.addEventListener('click', () => {
    shoppingCart.clearCart();
  });
};

export default cartButtonClickEvent;
