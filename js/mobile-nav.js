function mobileNav() {
  // Hide or show mobile nav
  $("#navigation").toggleClass("hide");
  // Change hamburger/close icon accordingly
  if ($("#navigation").hasClass("hide")) {
    $(".icon-menu").attr("src", "./images/icon-hamburger.svg")
  } else {
    $(".icon-menu").attr("src", "./images/icon-close.svg")
  }
}
