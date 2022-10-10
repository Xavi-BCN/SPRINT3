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

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    let x;
    for ( x = 0; x < products.length; x++ ){
        if (products[x].id == id){
            cartList.push(products[x]);
        }
    } 
    //console.log(cartList);
}

// Exercise 2
function cleanCart() {
    do{
       cart.pop();
    } while (cart.length = 0);
    
   cleanCartList();


    // console.log(cart);
    // location.reload();  
    console.log("Open Modal");
}

function cleanCartList() {
        
    do{
        cartList.pop();
     } while (cartList.length = 0);
}



// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let x;
    for ( x = 0; x < cartList.length; x++ ){
        total +=  cartList[x].price
    }
    //console.log(total);    
}

// Exercise 4
function generateCart(cartList) {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    calculateTotal();
    let i = 0;
    let unitats = 1;
    let result;

    for (i ; i < cartList.length; i++){
        result = cart.findIndex(item => item.id == cartList[i].id);
        //console.log(result)
        if (result == -1){
            cartList[i].quantity = 1;
            cartList[i].subtotal = cartList[i].price;
            cart.push(cartList[i]);
        }else if (result => 0){
            cart[result].quantity += unitats; 
            cart[result].subtotal = cart[result].quantity * cart[result].price;
        }
    }
    // console.log(cart);
    applyPromotionsCart(cart)    
}

// Exercise 5
function applyPromotionsCart(cart) {
    // Apply promotions to each item in the array "cart"
    cart.forEach(item => {
        if (item.id == 1){
            if(item.quantity >= 3){
                item.subtotalWithDiscount= item.quantity * 10;
                /* alert(`Estoy en el aceite ${item.id} y tengo ${item.quantity}
                precio con descuento ${item.subtotalWithDiscount} y el precio sin descuento es ${item.subtotal}`); */
            }
        }else if(item.id == 3){
            if(item.quantity >= 10){
                item.subtotalWithDiscount= Number.parseFloat(item.quantity * ((5/3)*2)).toFixed(2);
                /* alert(`Estoy en ls mezcla de pastel ${item.id} y tengo ${item.quantity}
                precio con descuento ${item.subtotalWithDiscount} y el precio sin descuento es ${item.subtotal}`); */
            }
        }else{
            item.subtotalWithDiscount=0;
        }
    });
    console.log(cart);
}

// Exercise 6
function printCart(cart) {
    // Fill the shopping cart modal manipulating the shopping cart dom

    /*  Crear nodos a utlilizar */
    // const th = document.createElement('th');
    // const td = document.createElement('td');
    /* Selecionar elemento padre del cual van a colgar los nodos  */
    let bodyTable = document.getElementById("cart_list");
    
    cart.forEach(item => {
        let row = document.createElement('tr');    
        
        let td = document.createElement('td');
        td.innerHTML = `<b>${item.name}</b>`;
        row.appendChild(td);
        
        td = document.createElement('td');
        td.innerText = item.price;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = item.quantity;
        row.appendChild(td);

        td = document.createElement('td');
        td.innerText = item.subtotal;
        row.appendChild(td);     

        bodyTable.appendChild(row)
    });
    document.getElementById("total_price").innerText = total
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	
    console.log("Open Modal");
	generateCart(cartList);
    printCart(cart);
    cleanCartList();
       
       
      
}