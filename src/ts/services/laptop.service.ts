import { Laptop } from '../interfaces';
import laptos from '../../mock/laptops.json';

class LaptopService {
  private laptops: Laptop[];

  constructor() {
    this.laptops = laptos;
  }

  getAllLaptops(): Promise<Laptop[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.laptops), 1000);
    });
  }

  searchLaptopsByName(name: string): Laptop[] {
    return this.laptops.filter((laptop) =>
      laptop.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  filterLaptopsByBrand(brand: string): Laptop[] {
    return this.laptops.filter((laptop) => laptop.brand === brand);
  }
}

export default LaptopService;
