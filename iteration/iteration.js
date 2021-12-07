// ITERATION -- For loop

//Loops are controlled structures and a fundemental part of programming

// console.log("Lifting weights rep 1");
// We want to ten reps

// for loop
for(let rep = 0; rep < 10; rep++){
    console.log(`Lifting weights ${rep}`);
}
// For loop 3 bolumden olusur.
// 1 - Looping through arrays
const dogs = ["dog1", "dog2", "dog3", 100,  "dog4", "dog5"];

// ****************************************************
for(let i = 0; i < dogs.length; i++){
    console.log(dogs[i], typeof dogs[i]);
}
// typeof[i] --> Objects
// typeof dogs[i] --> String or number

// ****************************************************
// ONLY STRINGS
for(let i = 0; i < dogs.length; i++){
    if(typeof dogs[i] !== "string"){
        console.log(dogs[i], typeof dogs[i]);
    }
}
// ****************************************************
// BREAK WITH NUMBERS
for(let i = 0; i < dogs.length; i++){
    if(typeof dogs[i] === "number")
    break;
    console.log(dogs[i], typeof dogs[i]);
}
// if the current iteration is not a string skip this and move to the next iteration



// ****************************************************
// Carpim tablosu
// for (var n=1; n<=10; n++) {
// 	for (i=1; i<=10; i++) {   
//         console.log(`${n} x ${i} = ${n * i}`);
// 	}
// }
// ****************************************************
