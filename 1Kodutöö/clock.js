console.log("Js töötab");
const toggleButton = document.getElementById("changeClockTheme");
const analogClock = document.querySelector(".realistic-clock");
const digitalClock = document.getElementById("digitalClock");
const digitalTime = document.getElementById("digitalTime");
const dropdownMenu = document.getElementById("picturesMenu");
const body = document.body;


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
function updateDigitalClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    digitalTime.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
setInterval(updateDigitalClock, 1000);

toggleButton.addEventListener("click", () => {
    if (digitalClock.classList.contains("hidden")) {
        const selectedTheme = dropdownMenu.value;
        dropdownMenu.classList.remove("hidden");
        digitalClock.classList.remove("hidden");
        analogClock.classList.add("hidden");
        toggleButton.textContent = "Muuda kella";
        if (selectedTheme === "nature") {
            body.style.backgroundColor ="rgb(48, 105, 50)";
            digitalClock.style.background="url('../Public/Pictures/nature_pic.jpg') no-repeat center center fixed";
            digitalClock.style.backgroundSize = "cover";
        }else if(selectedTheme==="space"){
            body.style.backgroundColor="rgb(33, 28, 42)";
            digitalClock.style.background="url('../Public/Pictures/space_pic.jpg') no-repeat center center fixed";
            digitalClock.style.backgroundSize = "cover";
        }else{
            body.style.backgroundColor ="rgb(2, 51, 115)";
            digitalClock.style.background="url('../Public/Pictures/ocean_pic.jpg') no-repeat center center fixed";
            digitalClock.style.backgroundSize = "cover";
        }
    } else {
        digitalClock.classList.add("hidden");
        dropdownMenu.classList.add("hidden");
        analogClock.classList.remove("hidden");
        body.style.backgroundColor = "aliceblue";
        toggleButton.textContent = "Muuda kella";
    }
});
dropdownMenu.addEventListener("change", () => {
    const selectedTheme = dropdownMenu.value;
    if (selectedTheme === "nature") {
        body.style.backgroundColor ="rgb(48, 105, 50)";
        digitalClock.style.background="url('../Public/Pictures/nature_pic.jpg') no-repeat center center fixed";
        digitalClock.style.backgroundSize = "cover";
    }else if(selectedTheme==="space"){
        body.style.backgroundColor="rgb(33, 28, 42)";
        digitalClock.style.background="url('../Public/Pictures/space_pic.jpg') no-repeat center center fixed";
        digitalClock.style.backgroundSize = "cover";
    }else{
        body.style.backgroundColor ="rgb(2, 51, 115)";
        digitalClock.style.background="url('../Public/Pictures/ocean_pic.jpg') no-repeat center center fixed";
        digitalClock.style.backgroundSize = "cover";
    }
});



updateClock();
updateDigitalClock();