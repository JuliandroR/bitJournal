jQuery(function () {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 10) {
      $("#header").css("background", "rgba(215, 206, 199, 0.8)");
      $("#header").css("color", "#233237");
    } else {
      $("#header").css("background", "#233237");
      $("#header").css("color", "#D7CEC7");
    }
  });
});