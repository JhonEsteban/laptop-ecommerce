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
}

export default Counter;
