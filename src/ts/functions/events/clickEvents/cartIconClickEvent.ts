import openShoppingCart from '../../cart/openShoppingCart';

const cartIconClickEvent = () => {
  const $cart = document.getElementById('cart') as HTMLDivElement;

  $cart.addEventListener('click', openShoppingCart);
};

export default cartIconClickEvent;
