/* -----------------------------------------------------------
START JS | AGE-RESTRICTION.HTML
-------------------------------------------------------------- */
// 1. CREATE AGE-RESTRICT(COOKIE) VARIABLE
// 2. CHECK LOCAL STORAGE COOKIE
// 3. REDIRECT URLs

// SET VARIABLE
let ageRestrictCookie;

// TRY TO GET LOCAL STORAGE COOKIE
function checkLocalStorageCookies() {
    let ageRestrictCookie = localStorage.getItem('ageAccepted');

    // REDIRECT TO AGE-VERIFICATION PAGE IF NO LOCAL STORAGE COOKIE IS SET
    if (ageRestrictCookie === null) {
        window.location.href = "https://benjakam.github.io/age-verification.html";
      }

    // REDIRECT TO HOMEPAGE IF LOCAL STORAGE COOKIE ALREADY SET TO YES
    else if (ageRestrictCookie === "yes") {
      window.location.href = "https://benjakam.github.io";
  }
}
// CHECK LOCAL STORAGE COOKIE IS ALREADY SET
checkLocalStorageCookies();

/* -----------------------------------------------------------
START JS | COUNTDOWN-TIMER (VARIABLES + FUNCTION)
-------------------------------------------------------------- */
// 1. CREATE COUNT VARIABLE
// 2. CREATE COUNTER VARIABLE
// 3. LOADING COUNTER 
// 4. SET COUNTER INTERVAL
// 5. SET LOCAL STORAGE COOKIE (KEY + VALUE)
// 6. RETURN VALUES

// SET VARIABLES
let count = 0;
let counter = null;

// SET COUNTER
window.onload = function () {
    initCounter();
};

// CREATE COUNTER FUNCTION
function initCounter() {
    // SET COUNTER TO 3600 SECONDS (60 MINUTES)
    count = getLocalStorage('count') || 3600;
    // SET COUNT DOWN INTERVAL TO 1000 MILLISECONDS (1 SECOND)
    counter = setInterval(timer, 1000);
}

// CREATE LOCAL STORAGE COOKIE FUNCTION
function setLocalStorage(key, val) {
    if (window.localStorage) {
        // SET LOCAL STORAGE ITMES (KEY + VALUE)
        window.localStorage.setItem(key, val);
    }
    // RETURN VALUE TO WRITE AND EDIT THIS LOCAL STORAGE VALUE 
    return val;
}

function getLocalStorage(key) {
    // RETURN LOCAL STORAGE KEY 
    return window.localStorage ? window.localStorage.getItem(key) : '';
}

/* -----------------------------------------------------------
START JS | COUNTDOWN-TIMER
-------------------------------------------------------------- */
// 1. CREATE COUNTDOWN FUNCTION
// 2. CREATE TIME VARIABLES
// 3. SET TIMER HTML ELEMENT
// 4. DELETE LOCAL STORAGE COOKIE IF COUNTDOWN-TIMER EXPIRED
// 5. SET TIMER HTML ELEMENT TO SECONDS IF COUNTDOWN > 1 MINTUE 
// 6. REDIRECT TO URL IF COUNTDOWN-TIMER EXPIRED

// CREATE TIMER FUNCTION
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