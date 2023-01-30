var shopingCart = {
    pen : 5,
    Books : 2,
    Bags : 1,
    Mumput : 5,
    Mouse : 1
}

// Get Property Value 


var totalPen = shopingCart.pen; // Get Property Value 
// console.log(totalPen)

var totalBooks = shopingCart['Books'] // Get Property Value 
// console.log(totalBooks)

var totalItems = 'Mumput'; // Get Property Value 
// console.log(shopingCart[totalItems])



// get All keys 
var allItems = Object.keys(shopingCart) // get All keys 
console.log(allItems)

// Get All values 
var allValues = Object.values(shopingCart) // Get All values 
console.log(allValues)


// set value 

shopingCart.Munput = 8;  // set value 


shopingCart['Mumput'] = 25;
// console.log(shopingCart)

var buyMumput = "Mumput";
var totalMumput = shopingCart[buyMumput];

shopingCart[buyMumput] = 50;
console.log(shopingCart);