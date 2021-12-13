export default class Product {
  constructor({ name, price, quantity }) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getInformation() {
    const { name, price, quantity } = this;
    return { name, price, quantity };
  }

  hasEnoughQuantity(requiredQuantity) {
    return this.quantity >= requiredQuantity;
  }

  changePrice(price) {
    this.price = price;
  }

  addQuantity(quantity) {
    this.quantity += quantity;
  }

  sellProduct() {
    this.quantity -= 1;
  }
}
