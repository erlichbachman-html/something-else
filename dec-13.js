function fibonachi(num)
{

    fibonachi.cache = fibonachi.cache || {}
    
    if (num===0)
    {
        return 0
    }

    if (num===1)
    {
        return 1
    }


    if (num in fibonachi.cache)
    {
        return fibonachi.cache[num]
    }
    let result = fibonachi(num-1) + fibonachi(num-2)
    fibonachi.cache[num] = result
    return result


}

console.log(fibonachi(8))
console.log(fibonachi.cache)



function add(a, b)
{
    if ( b === undefined)
    {
        return (b) =>
        {
            return a + b
        }
    }
    return a + b
}

console.log(add(5)(6))