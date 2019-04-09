//countdown to launch

const countDown = function (due) {
    //current date
    let now = new Date();
    //due date - current date
    let rest = due.getTime() - now.getTime();

    //time set
    let sec = Math.floor(rest / 1000 % 60);
    let min = Math.floor(rest / 1000 / 60) % 60;
    let hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    let days = Math.floor(rest / 1000 / 60 / 60 / 24);
    let count = [days, hours, min, sec]

    return count;
}

const goal = new Date(2019, 5 - 1, 4);

const recalc = function () {
    let counter = countDown(goal);
    document.getElementById('day').textContent = counter[0];
    document.getElementById('hour').textContent = counter[1];
    document.getElementById('min').textContent = counter[2];
    document.getElementById('sec').textContent = counter[3];

    refresh();
}

const refresh = function () {
    setTimeout(recalc, 1000);
}
recalc()
