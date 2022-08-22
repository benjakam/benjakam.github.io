/* -----------------------------------------------------------
START JS | AGE-VERIFICATION.HTML
-------------------------------------------------------------- */

// YES + NO BUTTON FUNCTIONS = SET LOCAL STORAGE COOKIES or REDIRECT URLs

// YES BUTTON CLICK FUNCTION = SET LOCAL STORAGE ITEM (NAME (KEY) + VALUE (YES))
function clickYes() {
    localStorage.setItem('ageAccepted', 'yes');
    window.location.href = "https://benjakam.github.io";
  }
  
  // NO BUTTON CLICK FUNCTION = SET LOCAL STORAGE ITEM (NAME (KEY) + VALUE (NO))
  function clickNo() {
    localStorage.setItem('ageAccepted', 'no');
    window.location.href = "https://benjakam.github.io/age-restriction.html";
  }
  
  // CHECK LOCAL STORAGE COOKIE AFTER SET THE COOKIE + REDIRECT TO URLs
  let ageCookie;
  
  // CHECK IF LOCAL STORAGE COOKIE SET 'ageAccepted'
  function checkLocalStorageCookies() {
    let ageCookie = localStorage.getItem('ageAccepted');
  
    // IF LOCAL STORAGE COOKIE SET (YES)) = REDIRECT TO HOMPAGE
    if (ageCookie === "yes") {
      window.location.href = "https://benjakam.github.io";
    }
    
    // IF LOCAL STORAGE COOKIE SET (NO)) = REDIRECT TO AGE-RESTRICTION PAGE
    else if (ageCookie == "no") {
      window.location.href = "https://benjakam.github.io/age-restriction.html"
    }
  }
  // CHECK LOCAL STORAGE COOKIE IS ALREADY SET
  checkLocalStorageCookies();

/*
  NOTE: 
  Local storage cookie is stored on the user's device as long as it is not manually deleted. 
  Users will not be asked for their age again when they visit the homepage again.
*/