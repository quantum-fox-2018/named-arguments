'use strict'

class House {

  constructor(obj, sold) {
    this.address = obj.address
    this.square_feet = obj.square_feet
    this.num_bedrooms = obj.num_bedrooms || 3
    this.num_baths = obj.num_baths || 2
    this.cost = obj.cost || 320000
    this.down_payment = obj.down_payment || 0.20
    this.sold = sold || false
    this.short_sale = obj.short_sale
    this.has_tenants = obj.has_tenants || false
  }

  obscure_address() {
    return this.address.replace(/[.{10}$]/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit) {
      this.sold = true
    }
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

let objHouse = {};
objHouse.address = 'address';
objHouse.square_feet = 100;
objHouse.num_bedrooms = 2;
objHouse.num_baths = 2;
objHouse.cost = 12345;
objHouse.down_payment = 12345;
objHouse.short_sale = true;
objHouse.has_tenants = true;

const cool = new House(objHouse)

console.log(cool.to_s())
