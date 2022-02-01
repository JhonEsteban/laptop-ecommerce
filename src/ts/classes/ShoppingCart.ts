import { LaptopCart } from '../interfaces';

import Counter from './Counter';

import { CurrencyService } from '../services';

class ShoppingCart {
  private cart: LaptopCart[];
  private counter: Counter;
  private currencyService: CurrencyService;

  private $cartContainer = document.getElementById(
    'cartContainer'
  ) as HTMLDivElement;

  private $cartCounter = document.getElementById('cartCounter') as HTMLElement;
  private $totalPrice = document.getElementById('totalPrice') as HTMLElement;

  private $totalLaptops = document.getElementById(
    'totalLaptops'
  ) as HTMLElement;

  constructor() {
    this.cart = [];
    this.counter = new Counter();
    this.currencyService = new CurrencyService();
    this.$cartCounter.textContent = this.counter.count.toString();
    this.$totalLaptops.textContent = this.counter.count.toString();
  }

  public loadCart() {
    const isCartEmpty = this.cart.length === 0 && this.counter.count === 0;

    if (isCartEmpty) {
      this.$cartContainer.appendChild(this.cartEmptyTemplate());
    }
  }

  private cartEmptyTemplate() {
    const $cartEmptyTemplate = document.createElement('div') as HTMLDivElement;

    $cartEmptyTemplate.classList.add('cart-empty');
    $cartEmptyTemplate.innerHTML = `<p>No hay laptops en el carrito :-(</p>`;

    return $cartEmptyTemplate;
  }

  public addLaptopToCart(newLaptop: LaptopCart): void {
    this.checkAndCleanDuplicateLaptops(newLaptop);
    this.renderCart(this.cart);
    this.updateCounter();
    this.getTotalLaptopsPrice();
  }

  private checkAndCleanDuplicateLaptops(newLaptop: LaptopCart): void {
    const hasDuplicates = this.cart.some(
      (laptop) => laptop.id === newLaptop.id
    );

    if (!hasDuplicates) {
      this.cart = [...this.cart, newLaptop];
      return;
    }

    this.cart = this.cart.map((laptop) =>
      laptop.id === newLaptop.id
        ? { ...laptop, amount: laptop.amount + 1 }
        : laptop
    );
  }

  private renderCart(cart: LaptopCart[]): void {
    const $fragment = document.createDocumentFragment();

    this.$cartContainer.innerHTML = '';

    cart.forEach((laptopCart) => {
      const $laptopCartTemplate = this.laptopCartTemplate(laptopCart);
      $fragment.appendChild($laptopCartTemplate);
    });

    this.$cartContainer.appendChild($fragment);
  }

  private laptopCartTemplate({
    id,
    name,
    price,
    amount,
  }: LaptopCart): HTMLElement {
    const $laptopCartTemplate = document.createElement(
      'article'
    ) as HTMLElement;

    $laptopCartTemplate.classList.add('cart-product');
    $laptopCartTemplate.setAttribute('id', id);

    const colombianPrice = this.currencyService.convertToColombianCurrency(
      price
    );

    $laptopCartTemplate.innerHTML = `
      <h3 class="cart-product__name">${name}</h3>
      <h4 class="cart-product__amount">${amount}</h4>

      <div class="options">
        <button
          class="options__one"
          type="button"
          title="Aumentar cantidad"
        >
          +
        </button>

        <button
          class="options__two"
          type="button"
          title="Disminuir cantidad"
        >
          -
        </button>
      </div>

      <span class="cart-product__price">${colombianPrice}</span>

      <button
        class="cart-product__close"
        type="button"
        title="Eliminar laptop del carrito"
      >
          X
      </button>`;

    return $laptopCartTemplate;
  }

  private updateCounter(): void {
    this.counter.increment();
    this.$cartCounter.textContent = this.counter.count.toString();
    this.$totalLaptops.textContent = this.counter.count.toString();
  }

  private getTotalLaptopsPrice(): void {
    const totalPrice = this.cart.reduce((acumulator, laptop) => {
      const intialAmount = 1;

      if (laptop.amount !== intialAmount) {
        const newPrice = laptop.price * laptop.amount;
        return acumulator + newPrice;
      }

      return acumulator + laptop.price;
    }, 0);

    const colombianPrice = this.currencyService.convertToColombianCurrency(
      totalPrice
    );

    this.$totalPrice.textContent = colombianPrice;
  }
}

export default ShoppingCart;
