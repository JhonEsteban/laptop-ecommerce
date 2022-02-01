import { LaptopList, ShoppingCart } from '../../classes';

const loadEvent = (laptopList: LaptopList, shoppingCart: ShoppingCart) => {
  window.addEventListener('DOMContentLoaded', () => {
    laptopList.loadLaptops();
    shoppingCart.loadCart();
  });
};

export default loadEvent;
