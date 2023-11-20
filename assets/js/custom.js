$(document).ready(function () {
  "use strict";

  // navbar style
  // $(window).on("scroll", function () {
  //   var scroll = $(this).scrollTop();
  //   if (scroll >= 38) {
  //     $("#site-header").addClass("fixed-top");
  //   } else {
  //     $("#site-header").removeClass("fixed-top");
  //   }
  // });

  // products slider
  $(".slider-center").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  // back to top
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });
  $(".back-to-top").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      200
    );
    return false;
  });
});
