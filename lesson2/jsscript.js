'use strict';
let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
        while(isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", "");
        }
}
start();

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optional: {

        },
        income: [],
        savings: true,
        chooseExpenses: function() {
            for(let i = 0; i < 2; i++) {
                let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                    b = prompt("Во сколько обойдется?", "");
                    if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
                        console.log("done");
                        appData.expenses[a] = b;
                    } else {
                        i = i - 1;
                    }
            }
        },
        detectDayBudget: function() {
            appData.moneyPerDay = (appData.budget/30).toFixed();
            alert("Ваш бюджет на 1 день составляет: " + appData.moneyPerDay);
        },
        detectLevel: function() {
            if(appData.moneyPerDay < 100) {
                console.log("Минимальный уровень достатка");
            } else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
                console.log("Средний уровень достатка");
            } else if(appData.moneyPerDay >= 2000){
                console.log("Высокий уровень достатка");
            } else {
                console.log("Произошла ошибка");
            }
        },
        optionalExpenses: function() {
            for(let i = 0; i < 3; i++) {
                let opt = prompt("Введите не обязательную статью расходов в этом месяце", "");
                if( (typeof(opt)) === 'string' && (typeof(opt)) != null && opt != ''){ 
                appData.optionalExpenses[i] = opt;
                } else {
                    i = i - 1;
                }      
            }
        },
        chooseIncome: function() {
            let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что то ещё?"));
            appData.income.sort();
            console.log("Способы доп. заработка: ");
            appData.income.forEach(function(item, i, mass){
                console.log((i+1) + ': ' + item);
            });
        }
    };
    console.log("Наша программа включает в себя данные: ");
    for(let key in appData) {
        console.log(key);
    }
