import { LaptopList, ShoppingCart } from '../classes';

import {
  loadEvent,
  submitEvent,
  selectChangeEvent,
  laptopClickEvent,
  cartIconClickEvent,
  cartButtonClickEvent,
  laptopCardClickEvent,
} from './events';

const runEvents = () => {
  const laptopList = new LaptopList();
  const shoppingCart = new ShoppingCart();

  loadEvent(laptopList, shoppingCart);
  submitEvent(laptopList);
  selectChangeEvent(laptopList);

  cartIconClickEvent();
  laptopClickEvent(laptopList, shoppingCart);
  cartButtonClickEvent(shoppingCart);
  laptopCardClickEvent(shoppingCart);
};

export default runEvents;
