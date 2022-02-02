import { LaptopCart } from '../interfaces';

import Counter from './Counter';

import { AlertService, CurrencyService } from '../services';

class ShoppingCart {
  private cart: LaptopCart[];
  private counter: Counter;
  private currencyService: CurrencyService;
  private alertService: AlertService;

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
    this.alertService = new AlertService();
    this.updateCounter();
  }

  public loadCart() {
    const isCartEmpty = this.cart.length === 0 && this.counter.count === 0;

    if (!isCartEmpty) {
      return;
    }

    this.$cartContainer.appendChild(this.cartEmptyTemplate());
    this.getTotalLaptopsPrice();
  }

  public addLaptopToCart(newLaptop: LaptopCart): void {
    this.checkAndCleanDuplicateLaptops(newLaptop);
    this.renderCart(this.cart);

    this.counter.increment();
    this.updateCounter();
    this.getTotalLaptopsPrice();
    this.alertService.showSuccessAlert('Laptop agregada al carrito!');
  }

  public clearCart(): void {
    this.cart = [];
    this.renderCart(this.cart);

    this.counter.reset();
    this.updateCounter();
    this.loadCart();
    this.alertService.showSuccessAlert('Se vació el carrito!');
  }

  public deleteLaptopFromCart(id: string): void {
    const amount = this.getLaptopCartAmountById(id);
    this.cart = this.cart.filter((laptopCart) => laptopCart.id !== id);

    this.renderCart(this.cart);
    this.counter.decrementCustomCount(amount);
    this.updateCounter();
    this.getTotalLaptopsPrice();
    this.loadCart();
    this.alertService.showSuccessAlert('Laptop eliminada del carrito!');
  }

  public incrementLaptopAmount(id: string): void {
    this.cart = this.cart.map((laptopCart) =>
      laptopCart.id === id
        ? { ...laptopCart, amount: laptopCart.amount + 1 }
        : laptopCart
    );

    this.renderCart(this.cart);
    this.counter.increment();
    this.updateCounter();
    this.getTotalLaptopsPrice();
  }

  public decrementLaptopAmount(id: string): void {
    const amount = this.getLaptopCartAmountById(id);
    const intialAmount = 1;

    const $laptopCardDeleteButton = document.querySelector(
      '.options__two'
    ) as HTMLButtonElement;

    if (amount === intialAmount) {
      $laptopCardDeleteButton.classList.add('inactive');
      return;
    }

    this.cart = this.cart.map((laptopCart) =>
      laptopCart.id === id
        ? { ...laptopCart, amount: laptopCart.amount - 1 }
        : laptopCart
    );

    this.renderCart(this.cart);
    this.counter.decrement();
    this.updateCounter();
    this.getTotalLaptopsPrice();
  }

  private cartEmptyTemplate() {
    const $cartEmptyTemplate = document.createElement('div') as HTMLDivElement;

    $cartEmptyTemplate.classList.add('cart-empty');
    $cartEmptyTemplate.innerHTML = `<p>No hay laptops en el carrito :-(</p>`;

    return $cartEmptyTemplate;
  }

  private getLaptopCartAmountById(id: string) {
    const [laptopCard] = this.cart.filter((laptop) => laptop.id === id);
    const { amount } = laptopCard;

    return amount;
  }

  private checkAndCleanDuplicateLaptops(newLaptop: LaptopCart): void {
    const hasDuplicates = this.cart.some(
      (laptop) => laptop.id === newLaptop.id
    );

    if (!hasDuplicates) {
      this.cart = [newLaptop, ...this.cart];
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
