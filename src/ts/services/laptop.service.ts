import { Laptop } from '../interfaces';
import laptos from '../../mock/laptops.json';

class LaptopService {
  private laptops: Laptop[];

  constructor() {
    this.laptops = laptos;
  }

  public getAllLaptops(): Promise<Laptop[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.laptops), 1000);
    });
  }

  public searchLaptopsByName(name: string): Laptop[] {
    return this.laptops.filter((laptop) =>
      laptop.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  public filterLaptopsByBrand(brand: string): Laptop[] {
    return this.laptops.filter((laptop) => laptop.brand === brand);
  }

  public filterLaptopById(id: string): Laptop[] {
    return this.laptops.filter((laptop) => laptop.id === id);
  }
}

export default LaptopService;
