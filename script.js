let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    document.querySelector('.time-display').textContent = 
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + 
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + 
        (seconds > 9 ? seconds : "0" + seconds);
}

document.getElementById('start').addEventListener('click', () => {
    if (!running) {
        timer = setInterval(updateTime, 1000);
        running = true;
    }
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(timer);
    running = false;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.querySelector('.time-display').textContent = "00:00:00";
    document.getElementById('laps').innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
    if (running) {
        const lapTime = document.createElement('li');
        lapTime.textContent = document.querySelector('.time-display').textContent;
        document.getElementById('laps').appendChild(lapTime);
    }
});
