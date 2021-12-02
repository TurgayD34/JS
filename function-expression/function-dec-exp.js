// FUNCTION DECLARATION AND EXPRESSION

// Main difference is that a function declaration you can before it's actually devlared in the code.
// You can not do that with a function expression

// FUNCTION DECLARATION
// Function declarations are hoisted basically means that we can call them safely before they are declared.
// Term that was introduced in ES6, general way of thonking about how execution contexts work in JS.

hoisted(); // Logs the right output without giving error

function hoisted(){
    console.log(`This is hoisted`);
}
// Function la baslayan kodlar kod uzerinden cagirabilirsiniz. Ama variable ile baslayanlar ise cagiramazsiniz.

// FUNCTION EXPRESSION
console.log(notHoisted);

notHoisted();

const notHoisted = function(){
    console.log(`This is not hoisted`);
}
