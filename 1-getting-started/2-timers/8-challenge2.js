// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
let count = 0;
const timerId = setInterval(
() => {
    if (count < 5) {
        console.log('Hello World');
        count += 1;
    } else {
        clearInterval(timerId);
        console.log("Done");
    }
},
1000
);