const cache = {}

function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return num > 1
}

function memoizedIsPrime(num) {
    if (cache[num]) {
        console.log('Returning from cache')
        return cache[num]
    } else {
        console.log('Calculating result')
        const result = isPrime(num)
        cache[num] = result
        return result
    }
}

console.log('17', memoizedIsPrime(17))
console.log('17', memoizedIsPrime(17))
console.log('9', memoizedIsPrime(9))
console.log('7919', memoizedIsPrime(7919))
console.log('7919', memoizedIsPrime(7919))
