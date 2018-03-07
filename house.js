'use strict'

class House {

  constructor(houseDetail) {
    this.address = houseDetail.address
    this.square_feet = houseDetail.square_feet
    this.num_bedrooms = houseDetail.num_bedrooms || 3
    this.num_baths = houseDetail.num_baths || 2
    this.cost = houseDetail.cost || 320000
    this.down_payment = houseDetail.down_payment || 0.20
    this.sold = houseDetail.sold || false
    this.short_sale = houseDetail.short_sale
this.has_tenants = houseDetail.has_tenants || false
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
var myHouse = {
  address: "jalan pondok indah",
  square_feet: 500,
  num_bedrooms: 2,
  num_baths:2,
  cost:90000,
  down_payment:500,
  sold:false,
  short_sale:true,
  has_tenants:false
}
const cool = new House(myHouse)

console.log(cool.to_s())
