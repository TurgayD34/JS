// FUNCTIONS CALLING OTHER FUNCTIONS

function slice(breakfast){
    return breakfast * 2;
    // We have one piece and it return two pieces.
}

function makeSandawich(bread, cheese){
    const breadSlice = slice(bread);
    const cheeseSlice = slice(cheese);

    // Calling for the slice() function inside of another function
    const sandawich = `I am having ${breadSlice} slices of bread with ${cheeseSlice} slices of cheese for breakfast`;
    return sandawich;
}
console.log(makeSandawich(2, 3));