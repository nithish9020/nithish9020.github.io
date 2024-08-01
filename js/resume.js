function generatePassword(){
    const length = document.getElementById("nof").value;
    const includeLowercase = document.getElementById("lower").checked;
  const includeUppercase = document.getElementById("upper").checked;
  const includeNumbers = document.getElementById("numm").checked;
  const includeSymbols = document.getElementById("sym").checked;
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbolChars = "!@#$%^&*()_+-=";
    const numberChars = "0123456789";
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase? lowercaseChars : "";
    allowedChars += includeUppercase? uppercaseChars : "";
    allowedChars += includeNumbers? numberChars : "";
    allowedChars += includeSymbols? symbolChars : "";
    if(allowedChars == ""){
      document.getElementById("pass").innerText = 'Please Select atleast only one type of character';
    }
    else if(length <= 0){
        document.getElementById("pass").innerText = 'Password length must be at least 1';
    }
    else{
    for(let i=0 ; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password+=allowedChars[randomIndex]
    }

    //console.log(allowedChars);
    document.getElementById("pass").innerText=password;
    }
}
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict
