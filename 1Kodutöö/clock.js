console.log("Js töötab");

function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDegree = (hours % 12) * 30 + (minutes / 2);
    const minuteDegree = minutes * 6 + (seconds * 0.1);
    const secondDegree = seconds * 6;

    const hourHand = document.querySelector(".hour");
    const minuteHand = document.querySelector(".minute");
    const secondHand = document.querySelector(".second");

    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
