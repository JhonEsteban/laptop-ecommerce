class Counter {
  public count: number;

  constructor() {
    this.count = 0;
  }

  public increment(): void {
    this.count++;
  }

  public decrement(): void {
    this.count--;
  }

  public decrementCustomCount(number: number) {
    this.count = this.count - number;
  }

  public reset(): void {
    this.count = 0;
  }
}

export default Counter;
