let date = new Date();
let dateMonth = date.getMonth();
let dateDay = date.getDate();
let dataHead = document.getElementById("month-calendar");
let actionCalendar = document.getElementById("dataAct");
let actionCalendar2 = document.getElementById("dataAct2");
let actionCalendar3 = document.getElementById("dataAct3");
let actionCalendar4 = document.getElementById("dataAct4");
let firstDayMonth;
switch (dateMonth) {
    case 0:
        dataHead.innerText = "январь";
        firstDayMonth = 0;
        break;
    case 1:
        dataHead.innerText = "февраль";
        firstDayMonth = 1;
        break;
    case 2:
        dataHead.innerText = "март";
        firstDayMonth = 2;
        break;
    case 3:
        dataHead.innerText = "апрель";
        firstDayMonth = 3;
        break;
    case 4:
        dataHead.innerText = "май";
        firstDayMonth = 4;
        break;
    case 5:
        dataHead.innerText = "июнь";
        firstDayMonth = 5;
        break;
    case 6:
        dataHead.innerText = "июль";
        firstDayMonth = 6;
        break;
    case 7:
        dataHead.innerText = "август";
        firstDayMonth = 7;
        break;
    case 8:
        dataHead.innerText = "сентябрь";
        firstDayMonth = 8;
        break;
    case 9:
        dataHead.innerText = "октябрь";
        firstDayMonth = 9;
        break;
    case 10:
        dataHead.innerText = "ноябрь";
        firstDayMonth = 10;
        break;
    case 11:
        dataHead.innerText = "декабрь";
        firstDayMonth = 11;
        break;
    default:
        console.log('Месяц не найден :(');
}


let year = date.getFullYear();
let yearBlock = document.getElementById("year-calendar");
yearBlock.innerText = year;
let firstDay = new Date(year, firstDayMonth, 1, 0, 0, 0, 0);
let dayMonth = firstDay.getDay();
console.log(dayMonth);

let calendar = document.getElementById("data")
let days = [];
switch (dayMonth) {
    case 1:
        break;
    case 2:
        calendar.innerHTML += `<div class="free-day"></div>`;
        break;
    case 3:
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        break;
    case 4:
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        break;
    case 5:
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        break;
    case 6:
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        break;
    case 0:
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        calendar.innerHTML += `<div class="free-day"></div>`;
        break;
    default:
        break;
}

for (let i = 1; i <= 30; i++) {
    days.push(i);
}

let firstActionCalendar = actionCalendar.value[0] + actionCalendar.value[1]
let secondActionCalendar = actionCalendar2.value[0] + actionCalendar2.value[1]
let thirdActionCalendar = actionCalendar3.value[0] + actionCalendar3.value[1]
let fourthActionCalendar = actionCalendar4.value[0] + actionCalendar4.value[1]

for (let j = 0; j < days.length; ++j) {
    if (j + 1 !== dateDay) {
        calendar.innerHTML += `<div id="inputData${days[j]}"><input type="button" value="${days[j]}" class="calendar-day-p calendar-back"></div>`;
    } else {
        calendar.innerHTML += `<div id="inputData${days[j]}"><input type="button" value="${days[j]}" id="inputData" class="calendar-day-p calendar-back day-active"></div>`;
    }
}

let actionArr = document.querySelectorAll('#action-calendar')
let actionBlocks = [];

for (let arr = 0; arr < actionArr.length; arr++) {
    actionBlocks.push(actionArr[arr].value)
}

let dataArr = document.querySelectorAll("#inputData")

console.log(firstActionCalendar)
