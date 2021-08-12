let wakeUpTime = 7;
let lunchTime = 12;
let napTime = lunchTime + 2;
const noon = 12;
const evening = 16;
const meridian = 'AM'
let partyTime;

const wakeUpTimeSelector = document.getElementById('wakeUp');
const lunchTimeSelector = document.getElementById('lunch');
const napTimeSelector = document.getElementById('nap');

wakeUpTimeSelector.addEventListener('change', () => {
    wakeUpTime = wakeUpTimeSelector.value;
})

lunchTimeSelector.addEventListener('change', () => {
    lunchTime = lunchTimeSelector.value;
})

napTimeSelector.addEventListener('change', () => {
    napTime = napTimeSelector.value;
})

const resolveClock = () => {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours >= 12) {
        meridian = 'PM';
    }

    let clockTime = hours + ':' + minutes + ':' + seconds + meridian + '!'

    return clockTime
}

const updateClock = () => {
    let clockDisplay = document.getElementById('countClock');
    let clockTime = resolveClock();
    let msg = document.getElementById('chngMsg');
    let img = document.getElementById('chngImg');

    let time = new Date().getHours()

    if (time == wakeUpTime) {
        msg = 'Wake Up!';
        // img.src = '';
    } else if (time == lunchTime) {
        msg = 'Time for lunch!';
        // img.src = '';
    } else if (time == partyTime) {
        msg = "It's Party Time!";
        // img.src = '';
    } else if (time < noon) {
        msg = 'Good Morning!';
        // img.src = '';
    }else if(time >= evening) {
        msg = 'Good Evening!';
        // img.src = '';
    } else {
        msg = 'Good Afternoon!'
        // img.src = ''
    }

    clockDisplay.innerText = clockTime;
}

setInterval(updateClock, 1000);



