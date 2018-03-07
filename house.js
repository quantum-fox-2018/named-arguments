'use strict'

class House {

  constructor(my_obj,has_tenants) {
    this.address = my_obj.address
    this.square_feet = my_obj.square_feet
    this.num_bedrooms = my_obj.num_bedrooms || 3
    this.num_baths = my_obj.num_baths || 2
    this.cost = my_obj.cost || 320000
    this.down_payment = my_obj.down_payment || 0.20
    this.sold = my_obj.sold || false
    this.short_sale = my_obj.short_sale
    this.has_tenants = has_tenants || false
  }

  obscure_address() {
    this.address.replace(/.{10}$/g, '****')
    return this.address
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

var obj = {
  address: 'address',
  square_feet: 100,
  num_bedrooms: 2,
  num_baths: 2,
  cost: 12345,
  down_payment: 12345,
  sold: true,
  short_sale: true
}

const cool = new House(obj,true)

console.log(cool.to_s())
