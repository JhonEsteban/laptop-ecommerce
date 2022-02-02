import { LaptopList } from '../../classes';
import { LaptopCart } from '../../interfaces';

const setNewLaptopCart = (laptopList: LaptopList, laptopId: string) => {
  const [laptop] = laptopList.filterLaptopById(laptopId);

  const newLaptop: LaptopCart = {
    id: laptop.id,
    name: `${laptop.name} ${laptop.model}`,
    price: laptop.price,
    amount: 1,
  };

  return newLaptop;
};

export default setNewLaptopCart;
