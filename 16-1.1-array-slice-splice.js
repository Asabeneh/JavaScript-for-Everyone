var items = ['Item 1', 'Item 2', 'Item 3', 'mango'];
console.log(items.length);
const compyItems = items.slice() // to copy all items of the original item
const someItems = items.slice(0, items.length);
console.log(someItems);
console.log(items[items.length - 1]);
console.log(items.splice(0, 1)); //remove one item
console.log(items);
console.log(items.splice(0)); // remove all items
console.log(items)