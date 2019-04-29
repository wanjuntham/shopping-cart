import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shopping-cart'
  availableProductList = [
    {
      id: 1,
      price: 300,
      description: 'Test Description',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      quantity: 0,
      selected: false,
    },
    {
      id: 2,
      price: 200,
      description: 'Test Description',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      quantity: 0,
      selected: false,
    },
    {
      id: 3,
      price: 200,
      description: 'Test Description',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      quantity: 0,
      selected: false,
    },
    {
      id: 4,
      price: 200,
      description: 'Test Description',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      quantity: 0,
      selected: false,
    },
  ]

  myCart = []

  isMyCart = false

  onClickLogo() {
    this.isMyCart = false
  }

  onClickMyCart() {
    this.isMyCart = true
  }

  onClickMinus(index: number) {
    if (this.availableProductList[index].quantity > 0) {
      this.availableProductList[index].quantity -= 1
    }
  }

  onClickAdd(index: number) {
    this.availableProductList[index].quantity += 1
  }

  onClickSelect(index: number) {
    this.availableProductList[index].selected = !this.availableProductList[
      index
    ].selected
  }

  onClickRemove(index: number) {
    this.myCart.splice(index, 1)
  }

  onClickClear() {
    for (let product of this.availableProductList) {
      product.selected = false
      product.quantity = 0
    }
    this.myCart = []
  }

  onClickAddToMyCart() {
    for (let product of this.availableProductList) {
      if (product.selected) {
        this.myCart.push(product)
      }
    }
  }

  filteredProductList() {
    let displayedProducts = []
    let myCartProductIds = []
    for (let product of this.myCart) {
      myCartProductIds.push(product.id)
    }

    for (let product of this.availableProductList) {
      if (!myCartProductIds.includes(product.id)) {
        displayedProducts.push(product)
      }
    }
    return displayedProducts
  }

  totalPrice() {
    let totalPrice = 0
    for (let product of this.myCart) {
      totalPrice += product.price * product.quantity
    }
    return totalPrice
  }
}
