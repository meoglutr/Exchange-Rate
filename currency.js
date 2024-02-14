class Currency {
  constructor() {
    this.url ="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Zi1ik61osdwFgfD74jJFDg7U61qa7l86I5BMQsPJ&base_currency=";
  }
  async exchange(amount, firstCurrency, secondCurrency) {
    const response = await (await fetch(`${this.url}${firstCurrency}`)).json();
    const result = amount * response.data[secondCurrency];
    return result;
  }
}
