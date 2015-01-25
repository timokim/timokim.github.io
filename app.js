var main = function() {
  /* Push the body and the nav over by 52px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      top: "0px"
    }, 250);

    $('body').animate({
      top: "52px"
    }, 250);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      top: "-52px"
    }, 250);

    $('body').animate({
      top: "0px"
    }, 250);
  });
};


$(document).ready(main);