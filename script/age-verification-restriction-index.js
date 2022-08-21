/* -----------------------------------------------------------
START JAVASCRIPT | INDEX.HTML
-------------------------------------------------------------- */

// REDIRECT URLs + CHECK LOCAL STORAGE COOKIES

// SET VARIABLE
let ageCookie; 

// TRY TO GET LOCAL STORAGE COOKIE
function checkLocalStorageCookies() {
  let ageCookie = localStorage.getItem('ageAccepted');

  // REDIRECT TO AGE-VERIFICATION PAGE IF NO LOCAL STORAGE COOKIE IS SET
  if (ageCookie === null) {
    window.location.href = "https://benjakam.github.io/age-verification.html"; 
  }

  // REDIRECT TO AGE-RESTRICTION PAGE IF LOCAL STORAGE COOKIE ALREADY SET TO UNDERAGE
  else if (ageCookie === "no") {
    window.location.href = "https://benjakam.github.io/age-restriction.html";
  }
}
// CHECK LOCAL STORAGE COOKIE IS ALREADY SET TO AGE ACCEPT = NO REDIRECT = USERS WILL STAY ON THE HOMEPAGE
checkLocalStorageCookies();

/*
Local storage cookie is stored on the user's device as long as it is not manually deleted. 
Users will not be asked for their age again when they visit the homepage again.
*/