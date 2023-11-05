const memoize = (func) =>{
    const cache = new Map();

    return (...arguments) => {
        const argumentKey = JSON.stringify(arguments)

        if (cache.has(argumentKey)){
            console.log("return from cache")
            return cache.get(argumentKey)
        }

        const result = func(...arguments)
        console.log("setting the value to cache")
        cache.set(argumentKey, result)
        return result
    }
}

const add = (a, b) => {
    console.log("adding two numbers:")
    return a + b
}

const multiply = (a, b) => {
    console.log("multiply two numbers")
    return a * b; 
}

const memoizeAdd = memoize(add)
const memoizeMultiply = memoize(multiply)

console.log(memoizeAdd(2,3))
console.log(memoizeAdd(2,3))
console.log(memoizeAdd(3,4))
console.log(memoizeAdd(3,4))
console.log(memoizeMultiply(2,3))
console.log(memoizeMultiply(2,3))