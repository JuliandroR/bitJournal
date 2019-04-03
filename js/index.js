jQuery(function () {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 10) {
      $("#header").css("background", "#D7CEC7");
      $("#header").css("color", "#233237");
    } else {
      $("#header").css("background", "#233237");
      $("#header").css("color", "#D7CEC7");
    }
  });
});