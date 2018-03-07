'use strict'

class House {

  constructor(objOfHouse) {
    this.address = objOfHouse.address;
    this.square_feet = objOfHouse.square_feet;
    this.num_bedrooms = objOfHouse.num_bedrooms;
    this.num_baths = objOfHouse.num_baths;
    this.cost = objOfHouse.cost;
    this.down_payment = objOfHouse.down_payment;
    this.sold = objOfHouse.sold;
    this.short_sale = objOfHouse.short_sale;
    this.has_tenants = objOfHouse.has_tenants;
  }

  obscure_address() {
    this.address.replace(/.{10}$/g, '****')
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

let objHouse = {
  address: 'address',
  square_feet: 100,
  num_bedrooms: 2,
  num_baths: 2,
  cost: 12345,
  down_payment: 12345,
  sold: true,
  short_sale: true,
  has_tenants: true,
}

const cool = new House(objHouse)

console.log(cool.to_s())
