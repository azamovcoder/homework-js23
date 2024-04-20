class PRODUCTS {
  constructor(id, quantity, unit, price) {
    this.id = `${new Date().getTime}`;
    this.quantity = quantity;
    this.unit = unit;
    this.price = price;
  }
}

export class desc extends PRODUCTS {
  constructor(id, price, quantity, unit, img, name) {
    super(id, quantity, unit, price);
    this.name = name;
    this.img = img;
  }
}
