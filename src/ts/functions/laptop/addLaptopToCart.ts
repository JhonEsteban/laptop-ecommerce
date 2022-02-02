import { LaptopList, ShoppingCart } from '../../classes';

import verifyIsTypeLaptopButton from './verifyIsTypeLaptopButton';
import getLaptopId from './getLaptopId';
import setNewLaptopCart from './setNewLaptopCart';

const addLaptopToCart = (
  e: Event,
  laptopList: LaptopList,
  shoppingCart: ShoppingCart
) => {
  const element = e.target as HTMLElement;
  const isLaptopButton = verifyIsTypeLaptopButton(element);

  if (!isLaptopButton) {
    return;
  }

  const laptopId = getLaptopId(element);
  const newLaptop = setNewLaptopCart(laptopList, laptopId);

  shoppingCart.addLaptopToCart(newLaptop);
};

export default addLaptopToCart;
