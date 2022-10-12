/*
hallenge 1:

  Print "Hello World" forever. Starting with a delay of 1 second
  but then incrementing the delay by 1 second each time.
  The second time will have a delay of 2 seconds
  The third time will have a delay of 3 seconds.

  Include the delay in the printed message
  Hello World. 1
  Hello World. 2
  Hello World. 3
  ...

  Constraints: You can only use const (no let or var)


  const increment = 1;
const hello = delay => {
    if (delay > 0) {
        console.log(`Hello World ${delay}`); 
    }
    setTimeout(
        hello(delay + increment),
        1000
      );
}
hello(1);
*/
const hello = delay => {    
    console.log(`Hello World ${delay}`);  

    setTimeout(
        hello,
        (delay + 1) * 1000,
        delay + 1
      );  
};

setTimeout(
    hello,
    1000,
    1
  );