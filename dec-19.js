function calculate(number)
{
    let memory = number;
    let saved = 0;
    function add(int)
    {
        memory+=int 
    }

    function sub(int)
    {
        memory-=int 
    }

    function save()
    {
        saved=memory
    }

    function reset()
    {
        memory=saved 
    }
    function print()
    {
        console.log(memory)
    }

    return [add, sub, save, reset, print]
}


function memoize(callback)
{
    let memory = {};

    return function(args)
    {
        console.log(memory)
        if (args in memory)
        {
            return memory[args]
        }

        let result = callback(args)
        memory[args] = result
        return result 
    }

}


function factorial(n) {
  let res = 1;

  for (let i = 2; i <= n; i++) {
    res *= i;
  }

  return res;
}



let fn = memoize(factorial)

console.log(fn(5))
console.log(fn(20))