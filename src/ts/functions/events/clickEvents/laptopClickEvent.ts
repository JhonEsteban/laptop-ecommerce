import { LaptopList, ShoppingCart } from '../../../classes';

import addLaptopToCart from '../../laptop/addLaptopToCart';

const laptopClickEvent = (
  laptopList: LaptopList,
  shoppingCart: ShoppingCart
) => {
  const $laptopList = document.getElementById('laptopList') as HTMLDivElement;

  $laptopList.addEventListener('click', (e) => {
    addLaptopToCart(e, laptopList, shoppingCart);
  });
};

export default laptopClickEvent;
