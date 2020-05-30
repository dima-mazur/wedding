// Создаём переменная которая будет хранить элемент для вывод таймера
let timer_show = document.getElementById("timer");
 
// Это функция для вычитания времени
function diffSubtract(date1, date2) {
    return date2 - date1;
}
 
// Это JSON массив с данными о времени
let end_date = {
    "full_year": "2020", // Год
    "month": "07", // Месяц
    "day": "25", // День
    "hours": "14", // Час
    "minutes": "30", // Минуты
    "seconds": "00" // Секунды
}
 
function add0(value) {
    if (value.toString().length < 2) {
        return '0' + value;
    } else {return value;}
}

// Переменная строка, которая хранит время до которого нужно досчитать
let end_date_str = `${end_date.full_year}-${end_date.month}-${end_date.day}T${end_date.hours}:${end_date.minutes}:${end_date.seconds}`;

timer = setInterval(function () {
    let now = new Date();
    let date = new Date(end_date_str);
    let ms_left = diffSubtract(now, date);
    if (ms_left <= 0) {
        clearInterval(timer);
        alert("Время закончилось");
    } else {
        let res = new Date(ms_left);
        let str_timer = `${res.getUTCMonth()} мес. ${res.getUTCDate() - 1} дн. ${add0(res.getUTCHours())}:${add0(res.getUTCMinutes())}:${add0(res.getUTCSeconds())}`;
        timer_show.innerHTML = str_timer;
    }
}, 1000)