const seconds = (total) => total % 60

const perimeter = (side, count) => side * count

const task3 = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz")
        else if (i % 3 === 0) console.log("fizz")
        else if (i % 5 === 0) console.log("buzz")
        else console.log(i)
    }
}

const Calculate = (a, b, c) => (a + b + c) / 3

const isDivisible = (n, x, y) => n % x === 0 && n % y === 0

const task6 = (n) => {
    let randomArray = Array.from({length: n}, () => Math.floor(Math.random() * n) + 1);
    console.log("Max: " + Math.max(randomArray))
    console.log("Min: " + Math.min(randomArray))
    let sum = randomArray.reduce((acc, val) => acc + val, 0);
    console.log("Sum: " + sum)
    console.log("Avg: " + sum / n)
    console.log("Odd: " + randomArray.filter(el => el % 2))
}

const task7 = (n) => {
    return Array.from({length: 5}, () => Array.from({length: 5}, () => Math.floor(Math.random() * (n * 2 + 1)) - n))
                .map((arr, i) =>  { arr[i] = arr[i] >= 0 ? 1 : 0; return arr})
}

const task8 = (a, b, operaton) => {
    let Add = (a, b) => console.log(a + b)
    let Sub = (a, b) => console.log(a - b)
    let Mul = (a, b) => console.log(a * b)
    let Div = (a, b) => console.log(b != 0 ? a / b : "Div 0")
    switch (operaton) {
        case "Add": Add(a,b); break;
        case "Sub": Sub(a,b); break;
        case "Mul": Mul(a,b); break;
        case "Div": Div(a,b); break;
        default: console.log("Unknown operation: Add|Sub|Mul|Div")
    }
}

const task9 = (num) => {
    console.log(num >= 0 ? "Positive" : "Negative")
    console.log((() => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if(num % i === 0) return false;
        }
        return num > 1;
    })() ? "Prime" : "non-Prime")
    let divBy = [2,5,3,6,9].filter(v => !(num % v))
    console.log(divBy.length ? `Divisible by: ${divBy.join(',')}` : "Not divisible by 2,5,3,6,9")
}

const task10 = (arr) => arr.reverse().map((v, _) => typeof v != 'number' ? v : v ** 2)

const task11 = (arr) => Array.from(new Set(arr))