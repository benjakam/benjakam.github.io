/* -----------------------------------------------------------
START JS | AGE-RESTRICTION.HTML
-------------------------------------------------------------- */
let ageRestrictCookie;

function checkLocalStorageCookies() {
    let ageRestrictCookie = localStorage.getItem('ageAccepted');

    if (ageRestrictCookie === null) {
        window.location.href = "https://benjakam.github.io/age-verification.html";
      }

    else if (ageRestrictCookie === "yes") {
      window.location.href = "https://benjakam.github.io";
  }
}
checkLocalStorageCookies();

/* -----------------------------------------------------------
START JS | COUNTDOWN-TIMER (VARIABLES + FUNCTION)
-------------------------------------------------------------- */
let count = 0;
let counter = null;

window.onload = function () {
    initCounter();
};

function initCounter() {
    count = getLocalStorage('count') || 3600;
    counter = setInterval(timer, 1000);
}

function setLocalStorage(key, val) {
    if (window.localStorage) {
        window.localStorage.setItem(key, val);
    }

    return val;
}

function getLocalStorage(key) {
    return window.localStorage ? window.localStorage.getItem(key) : '';
}

/* -----------------------------------------------------------
START JS | COUNTDOWN-TIMER
-------------------------------------------------------------- */
function timer() {
    let seconds = count % 60;
    let minutes = Math.floor(count / 60);
    let hours = Math.floor(minutes / 60);
    
    minutes %= 60;
    hours %= 60; 
    
    y = ((minutes>0) ? ((minutes>9) ? minutes : '0'+minutes) + ":" : "") 
    y += (seconds>9 || minutes == 0) ? seconds : '0'+seconds;
    
    document.getElementById("avr__age-restrict__timer").innerHTML = "Wait... " + y + " Minutes";

    count = setLocalStorage('count', count - 1);
    if (count == 0) {
        clearInterval(counter);
        localStorage.removeItem("ageAccepted");
        window.location.href = "https://benjakam.github.io/age-verification.html";
        localStorage.clear();
    }
    if (count <= 59) {
        document.getElementById("avr__age-restrict__timer").innerHTML = "Wait... " + y + " Seconds";
    }
}

function clickReturn() {
    localStorage.clear();
    window.location.href = "https://benjakam.github.io/age-verification.html";
}