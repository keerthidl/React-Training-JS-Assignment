function createCounter(){
    let count = 0;

    return {
        increment: () => {
            count++
        },

        decrement : () => {
            count --
        },

        getCount : () =>{
            return count;
        },
    };
}

// initialise the counter 
const counter = createCounter(); 
// counter operation
console.log("initial Count : ", counter.getCount())
counter.increment();
console.log("second count : ", counter.getCount());
counter.increment();
console.log("third count:", counter.getCount());
counter.decrement()
console.log("fourth count:", counter.getCount());