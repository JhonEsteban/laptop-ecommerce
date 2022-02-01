class CurrencyService {
  public convertToColombianCurrency(price: number): string {
    const options = { style: 'currency', currency: 'COP' };
    const currencyFormat = new Intl.NumberFormat('es-CO', options);

    return currencyFormat.format(price);
  }
}

export default CurrencyService;
