function task1() {
    let i = 0
    while (i <= 100) {
        console.log(i++)
    }
}

function task2() {
    let i = 0
    do {
        if (i === 0) { console.log(i + " - це нуль")}
        else if (i % 2 === 0) { console.log(i + " - парне число")}
        else { console.log(i + " - непарне число") }
    } while (++i <= 10)
}

function task3() {
    let numb = 10000
    let counter = 0
    while (numb >= 50) {
        counter++
        numb /= 2
    }
    let result = numb
    console.log(result + " - " + counter + " iterations")
}

function task4() {
    let month = parseInt(prompt("Введіть номер місяця (від 1 до 12):"))
    
    if (1 > month || 12 < month) {
        alert("Невірне значення")
        return 0;
    } else {
        let monthArr = [
            "січень", "лютий", "березень", 
            "квітень", "травень", "червень", 
            "липень", "серпень", "вересень", 
            "жовтень", "листопад", "грудень"
        ]
    
        let seasons = {
            "зима": [1, 2, 12],
            "весна": [3, 4, 5],
            "літо": [6, 7, 8],
            "осінь": [9, 10, 11]
        }
    
        let season = Object.entries(seasons).find(([_, months]) => months.includes(month))
    
        alert(season[0] + " - " + monthArr[month - 1])
    }
}

function task5() {
    let celsiusDg = parseFloat(prompt("Введіть температуру в градусах за Цельсієм:"))
    let fahrenheitDg = (9.0 / 5.0) * celsiusDg + 32.0
    alert(fahrenheitDg + " - темература за Фаренгейтом")
}

function task6() {
    let week = parseInt(prompt("Введіть номер дня тижня (від 1 до 7):"))
    if (1 > week || 7 < week) {
        document.getElementById("result").textContent = "Task 7: Невірне значення";
        return
    }

    let weekArr = [
        "понеділок",
        "вівторок",
        "середа",
        "четвер",
        "п'ятниця", 
        "субота", 
        "неділя"
    ]

    document.getElementById("result").textContent = "День тижня: " + weekArr[week - 1];
}