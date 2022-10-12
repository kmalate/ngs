const theOneFunc = () => {
    console.log("Hello");
};

setTimeout(theOneFunc, 4 * 1000);

setTimeout(theOneFunc, 8 * 1000);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
