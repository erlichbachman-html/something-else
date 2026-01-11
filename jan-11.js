const autos = [
    {
        brand: "Lada",
        model: "Granta",
        year: 2020,
        price: 650000,
        used: false
    },
    {
        brand: "Lada",
        model: "Vesta",
        year: 2018,
        price: 850000,
        used: true
    },
    {
        brand: "Lada",
        model: "XRAY",
        year: 2022,
        price: 1200000,
        used: false
    },
    {
        brand: "Lada",
        model: "Niva",
        year: 2015,
        price: 550000,
        used: true
    },
    {
        brand: "Lada",
        model: "Largus",
        year: 2019,
        price: 750000,
        used: true
    },
    { brand: "BMW", model: "X8", year: 2012, price: 423000, used: true },
    { brand: "BMW", model: "X6", year: 2008, price: 42000, used: false }

];
/* Массив из всех цен*/
only_prices = autos.map((auto) => {
    return auto.price
})

console.log(only_prices)

/* Самый дорогой автомобиль */
let sorted = autos.sort((a, b) => {
     return b.price - a.price
 })

 console.log(sorted[0].price)

/* Сумма всех цен авто БМВ*/
let only_bmw_autos_prices = autos.reduce((acc, auto) => {
    if (auto.brand=="BMW")
    {
        acc+=auto.price
        return acc
    }
    else {
        return acc
    }
}, 0)

console.log(only_bmw_autos_prices)


/*Количество новый автомобилей*/

console.log(autos.reduce((acc, auto) => {
    if (auto.used===true){
        ++acc
        return acc 
    }
    else
    {
        return acc
    }
}, 0))




/* Моя реализация методов */ 

Array.prototype.myfilter = function(callback)
{
    let result = []
    for (let i = 0; i < this.length; ++i)
    {
        if (callback(this[i], i, this)){
            result.push(this[i])
        }
    }
    return result
}

Array.prototype.myevery = function(callback)
{
    for (let i = 0; i < this.length; ++i)
    {
        if (!callback(this[i], i, this)){
            return false
        }
    }
    return true
}


Array.prototype.mysome = function(callback)
{
    for (let i = 0; i < this.length; ++i)
    {
        if (callback(this[i], i, this)){
            return true
        }
    }
    return false
}