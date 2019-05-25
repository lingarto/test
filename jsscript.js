'use strict';

let money = prompt("Ваш бюджет на месяц?", ""), 
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    q1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a1 = prompt("Во сколько обойдется?", ""),
    q2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt("Во сколько обойдется?", ""),
    appData = {
        budget: money,
        timeData: time,
        expenses: {
            q1: a1,
            q2: a2
        },
        optional: {

        },
        income: [],
        savings: false
    };
alert("Бюджет на 1 день составляет: " 
        + ((appData.budget - appData.expenses.q1 - appData.expenses.q2)/30));