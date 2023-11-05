const memoize = (func) =>{
    const cache = new Map();

    return (...args) => {
        const argsKey = JSON.stringify(args)

        if (cache.has(argsKey)){
            console.log("return from cache")
            return cache.get(argsKey)
        }

        const result = func(...args)
        console.log("setting the value from cache")
        cache.set(argsKey, result)
        return result
    }
}

const add = (a, b) => {
    console.log("adding two numbers:")
    return a + b
}

const memoizeAdd = memoize(add)

console.log(memoizeAdd(2,3))
console.log(memoizeAdd(2,3))
console.log(memoizeAdd(3,4))
console.log(memoizeAdd(3,4))