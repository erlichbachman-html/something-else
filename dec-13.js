

function factorial(num)
{
    factorial.cache = factorial.cache || {}
    if ( num in factorial.cache)
    {
        return factorial.cache[num]
    }
    if ( num === 1)
    {
        return 1
    }
    
    let result = num * factorial(num - 1)
    factorial.cache[num] = result;
    return result
}

console.log(factorial(1))
console.log(factorial.cache)