/* -----------------------------------------------------------
START JS | AGE-VERIFICATION.HTML
-------------------------------------------------------------- */
// REDIRECT BUTTONS (SET LOCAL STORAGE COOKIES)
function clickYes() {
    localStorage.setItem('ageAccepted', 'yes');
    window.location.href = "https://benjakam.github.io";
  }
  
  function clickNo() {
    localStorage.setItem('ageAccepted', 'no');
    window.location.href = "https://benjakam.github.io/age-restriction.html";
  }
  
  // REDIRECT URLs (CHECK LOCAL STORAGE COOKIES)
  let ageCookie;
  
  function checkLocalStorageCookies() {
    let ageCookie = localStorage.getItem('ageAccepted');
  
    if (ageCookie === "yes") {
      window.location.href = "https://benjakam.github.io";
    }
    
    else if (ageCookie == "no") {
      window.location.href = "https://benjakam.github.io/age-restriction.html"
    }
  }
  checkLocalStorageCookies();