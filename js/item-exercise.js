function Item (itemName, itemPrice) {
    this.name = itemName;
    this.price = itemPrice;
}

Item.prototype.calculatePrice = function () {
    if (this.name.includes('fruit')) {
        return this.price * 0.95;
    }
    else {
        return this.price;
    }
};

var tv = new Item('Big TV', 1000);
var gamingPC = new Item('Top Gaming PC', 1400);
var mango = new Item('mango fruit', 200);


console.log(tv);
console.log(gamingPC);
console.log(mango);

console.log( mango.calculatePrice() );
console.log( gamingPC.calculatePrice() );
