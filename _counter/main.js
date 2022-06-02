'use strict'

const year = document.querySelector('._year'),
    month = document.querySelector('._month'),
    day = document.querySelector('._day'),
    hour = document.querySelector('._hour'),
    minute = document.querySelector('._minute'),
    second = document.querySelector('._second'),
    dateBirthday = Date.parse('Jun 29, 2038  00:00:00');

function myBirthday() {
    const timerBirthday = setInterval(updateTimer, 1000);

    updateTimer();

    function updateTimer() {
        let waitInterval = (dateBirthday - Date.now()) / 1000;

        const waitSecond = Math.floor(waitInterval % 60),
            waitMinute = Math.floor((waitInterval / 60) % 60),
            waitHour = Math.floor((waitInterval / (60 * 60)) % 24),
            waitDay = Math.floor((waitInterval / (60 * 60 * 24)) % 30.4),
            waitMonth = Math.floor((waitInterval / (60 * 60 * 24 * 30.4)) % 12),
            waitYear = Math.floor(waitInterval / (60 * 60 * 24 * 30.4 * 12));

        year.textContent = setDateNumber(waitYear);
        month.textContent = setDateNumber(waitMonth);
        day.textContent = setDateNumber(waitDay);
        hour.textContent = setDateNumber(waitHour);
        minute.textContent = setDateNumber(waitMinute);
        second.textContent = setDateNumber(waitSecond);

        if (Math.floor(waitInterval) <= 0) {
            clearInterval(timerBirthday);
        }
    }
}

function setDateNumber(data) {
    if (+data < 10) {
        return `0${data}`;
    }
    return data;
}

myBirthday(dateBirthday);