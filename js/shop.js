function main() {
    open_modal();
    calculateTotal();
    // generateCart(cartList);
    applyPromotionsCart(cart);
    printCart(cart);
}

// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
const cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];
let total = 0;
let totalDiscount = 0;
let existDiscount;
let thingInCart = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    let i;
    for (i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            cartList.push(products[i]);
            thingInCart += 1;
        }
    }
    document.getElementById("count_product").innerText = thingInCart;
}
// Exercise 2
function cleanCart() {
    do {
        cart.pop();
    } while (cart.length = 0);
    total = 0;
    cleanCartList();
    totalDiscount = 0;
    existDiscount = false;
    thingInCart = 0;
    document.getElementById("count_product").innerText = thingInCart;
    cleanPrintCard();
}

function cleanCartList() {
    do {
        cartList.pop();
    } while (cartList.length = 0);
}

function cleanPrintCard() {
    document.getElementById("total_price").innerHTML = "0";
    document.getElementById("cart_list").innerHTML = " ";
    cleanCartList();
}
// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array 
    // Here Level 1
    /* let x;
    for ( x = 0; x < cartList.length; x++ ){
        total +=  cartList[x].price
    } */
    // Here Level 2
    total = 0;
    cart.forEach(element => {
        total += element.subtotal
        total = Number(parseFloat(total).toFixed(2));
    });
}

function calculateTotalWithDiscount() {
    totalDiscount = 0;
    cart.forEach(item => {
        if (item.subtotalWithDiscount != 0) {
            totalDiscount += item.subtotalWithDiscount;
        } else {
            totalDiscount += item.subtotal;
        }
    });
    totalDiscount = Number.parseFloat(totalDiscount).toFixed(2);
}

// Exercise 4
function generateCart(cartList) {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    let i = 0;
    let unitats = 1;
    let result;

    for (i; i < cartList.length; i++) {
        result = cart.findIndex(item => item.id == cartList[i].id);
        if (result == -1) {
            cartList[i].quantity = 1;
            cartList[i].subtotal = cartList[i].price;
            cart.push(cartList[i]);
        } else if (result => 0) {
            cart[result].quantity += unitats;
            cart[result].subtotal = cart[result].quantity * cart[result].price;
        }
    }
}
// Exercise 5
function applyPromotionsCart(cart) {
    // Apply promotions to each item in the array "cart"
    existDiscount = false;
    cart.forEach(item => {
        if (item.id == 1) {
            if (item.quantity >= 3) {
                item.subtotalWithDiscount = item.quantity * 10;
                existDiscount = true;
            }
            else if (item.quantity < 3) {
                item.subtotalWithDiscount = 0;
            }
        } else if (item.id == 3) {
            if (item.quantity >= 10) {
                let swd = item.quantity * (5 * 0.66);
                item.subtotalWithDiscount = Number(parseFloat(swd).toFixed(3));
                existDiscount = true;
            }
            else if (item.quantity < 10) {
                item.subtotalWithDiscount = 0;
            }
        } else {
            item.subtotalWithDiscount = 0;
        }
    });
    if (existDiscount) calculateTotalWithDiscount();
    localStorage.setItem("listaCompra", JSON.stringify(cart));
}

// Exercise 6
function printCart(cart) {
    // Fill the shopping cart modal manipulating the shopping cart dom
    cleanPrintCard();
    let bodyTable = document.getElementById("cart_list");

    cart.forEach(item => {
        let row = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = `<b>${item.name}</b>`;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = "$" + item.price;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = item.quantity;
        row.appendChild(td);

        td = document.createElement('td');
        if (item.subtotalWithDiscount > 0) {
            td.innerText = "$" + item.subtotalWithDiscount + " *";
        } else {
            td.innerText = "$" + item.subtotal;
        }
        row.appendChild(td);
        bodyTable.appendChild(row)
    });

    if (existDiscount) {
        document.getElementById("total_price").innerHTML = totalDiscount + '<small> *Discount aplicated </small>';
    } else {
        document.getElementById("total_price").innerText = total;
    };
}

// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    let productPosition = 0;
    let cartPosition = 0;
    let unitats = 1;
    // 1. Loop for to the array products to get the item to add to cart
    productPosition = products.findIndex(element => element.id == id);
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    cartPosition = cart.findIndex(element => element.id == id);

    if (cartPosition == -1) {
        cart.push({...products[productPosition]});
        cart[cart.length - 1].quantity = unitats;
        cart[cart.length - 1].subtotal = cart[cart.length - 1].price * cart[cart.length - 1].quantity
        thingInCart++;
    } else {
        cart[cartPosition].quantity += unitats;
        cart[cartPosition].subtotal = cart[cartPosition].price * cart[cartPosition].quantity
        thingInCart++;
    }
    document.getElementById("count_product").innerText = thingInCart;
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to remove in the cart
    cartPosition = cart.findIndex(element => element.id == id);
    cartPosition == -1 ? alert("Product no exist in you cart") : console.log("id is present in cart");
    // 2. Remove found product to the cartList array
    if (cartPosition => 0) {
        if (cart[cartPosition].quantity == 1) {
            cart.splice(cartPosition, 1);
        } else if (cart[cartPosition].quantity > 1) {
            cart[cartPosition].quantity = cart[cartPosition].quantity - 1;
            cart[cartPosition].subtotal = cart[cartPosition].quantity * cart[cartPosition].price;
            cart[cartPosition].subtotalWithDiscount = 0;
        }
    }
    thingInCart--;
    document.getElementById("count_product").innerText = thingInCart;
}

function open_modal() {
    console.log("Open Modal");
}

