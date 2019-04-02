// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function you() {
  const maybeyoucan = "Maybe you can touch this";
  console.log("You can't?");

  function cant(){
  
    const maybeyoucant ="But also, maybe you can't.";
    function touch(){

    const definitelycan ="I'm sure I can";
    console.log(definitelycan);
      function it() {

        const thisthisthis = "Touch this";
        console.log(maybeyoucan);
        console.log(maybeyoucant);
        console.log(thisthisthis);
      }

      it();
    }

    touch();
  }

  cant();
}

you();
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => { 
  let privateincrement = 0;
  return () => {
    return privateincrement++;
  };
  // Return a function that when invoked increments and returns a counter variable.
};

// Example usage: 
const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let privatecounter = 0;
  function count(x) {
    return privatecounter += x;
  }

  return {
    increment: () => count(1),
    decrement: () => count(-1),
    value: () => privatecounter
  };
};

const Count1 = counterFactory();
console.log(Count1.value());
console.log(Count1.increment());
console.log(Count1.increment());
console.log(Count1.increment());
console.log(Count1.decrement());


