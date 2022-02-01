import { Laptop } from '../interfaces';
import LaptopService from '../services/laptop.service';

class LaptopList {
  private laptops: Laptop[];
  private laptopService: LaptopService;
  private $laptopList = document.getElementById('laptopList') as HTMLElement;
  private $laptopsSection = document.getElementById('laptops') as HTMLElement;

  constructor() {
    this.laptops = [];
    this.laptopService = new LaptopService();
  }

  public loadLaptops(): void {
    this.$laptopsSection.appendChild(this.loaderTemplate());

    this.laptopService.getAllLaptops().then((laptops) => {
      this.laptops = [...laptops];
      this.renderLaptops(this.laptops);
    });
  }

  public searchLaptopsByName(name: string): void {
    const laptopsFiltered = this.laptopService.searchLaptopsByName(name);
    this.renderLaptops(laptopsFiltered);
  }

  public filterLaptopsByBrand(name: string): void {
    if (name === 'Filtrar por marcas') {
      this.renderLaptops(this.laptops);
      return;
    }

    const laptopsFiltered = this.laptopService.filterLaptopsByBrand(name);
    this.renderLaptops(laptopsFiltered);
  }

  private renderLaptops(laptops: Laptop[]): void {
    const $fragment = document.createDocumentFragment();
    const $loader = document.getElementById('loader') as HTMLElement;

    $loader.classList.add('hide');

    this.$laptopList.innerHTML = '';

    laptops.forEach((laptop) => {
      const $laptopTemplate = this.laptopTemplate(laptop);
      $fragment.appendChild($laptopTemplate);
    });

    this.$laptopList.appendChild($fragment);
  }

  private loaderTemplate(): HTMLDivElement {
    const $loaderTemplate = document.createElement('div');

    $loaderTemplate.classList.add('loader');
    $loaderTemplate.setAttribute('id', 'loader');

    return $loaderTemplate;
  }

  private convertToColombianCurrency(price: number): string {
    const options = { style: 'currency', currency: 'COP' };
    const currencyFormat = new Intl.NumberFormat('es-CO', options);

    return currencyFormat.format(price);
  }

  private laptopTemplate({
    id,
    name,
    price,
    model,
    image,
  }: Laptop): HTMLElement {
    const $laptopTemplate = document.createElement('article');

    $laptopTemplate.classList.add('laptop');
    $laptopTemplate.setAttribute('id', id);

    const colombianPrice = this.convertToColombianCurrency(price);

    $laptopTemplate.innerHTML = `
      <img
        src="${image}"
        class="laptop__image"
        alt="${name}"
        title="${name}"
      />

      <div class="details">
        <span class="details__name">${name}</span>
        <span class="details__model">${model}</span>
      </div>

      <p class="laptop__price">${colombianPrice}</p>

      <button class="laptop__button" type="button">Comprar</button>
    `;

    return $laptopTemplate;
  }
}

export default LaptopList;
