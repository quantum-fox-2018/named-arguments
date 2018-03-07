'use strict'

class House {

  constructor(get_obj) {
    this.address = get_obj.address
    this.square_feet = get_obj.square_feet
    this.num_bedrooms = get_obj.num_bedrooms || 3
    this.num_baths = get_obj.num_baths || 2
    this.cost = get_obj.cost || 320000
    this.down_payment = get_obj.down_payment || 0.20
    this.sold = get_obj.sold || false
    this.short_sale = get_obj.short_sale
    this.has_tenants = get_obj.has_tenants || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
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

let obj={
  address : 'address',
  square_feet : 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,
  down_payment : 12345,
  sold : true,
  short_sale : true,
  has_tenants : true
}
const cool = new House(obj)

console.log(cool.to_s())
