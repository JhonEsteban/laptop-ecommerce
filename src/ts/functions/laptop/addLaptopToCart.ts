import { LaptopList, ShoppingCart } from '../../classes';
import { LaptopCart } from '../../interfaces';

const addLaptopToCart = (
  e: Event,
  laptopList: LaptopList,
  shoppingCart: ShoppingCart
) => {
  const element = e.target as HTMLElement;
  const isLaptopButton = element.classList.contains('laptop__button');

  if (isLaptopButton) {
    const laptopCard = element.parentElement as HTMLElement;
    const laptopCardId = laptopCard.getAttribute('id') as string;

    const [laptop] = laptopList.filterLaptopById(laptopCardId);

    const newLaptop: LaptopCart = {
      id: laptop.id,
      name: `${laptop.name} ${laptop.model}`,
      price: laptop.price,
      amount: 1,
    };

    shoppingCart.addLaptopToCart(newLaptop);
  }
};

export default addLaptopToCart;
