import * as cartServivce from '../services/cart.js'
import createItem from '../services/item.js';

const myCart = [];
const myWishList = [];

console.log("Bem vindo ao shopee cart");

const item1 = await createItem("hotweels ferrari", 20.99, 1);
const item2 = await createItem("hotweels lambouguini", 39.99, 3);

await cartServivce.addItem(myCart, item1)
await cartServivce.addItem(myCart, item2)

await cartServivce.removeItem(myCart, 1)

await cartServivce.displayCart(myCart)


// await cartServivce.deleteItem(myCart, item2.name)
// await cartServivce.deleteItem(myCart, item1.name)

console.log("shopee cart TOTAL é:");
await cartServivce.calculateTotal(myCart)