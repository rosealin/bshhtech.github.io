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
    infinite: true,
    centerMode: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  // counter
  $(window).on("load", function () {
    $(".counter").counterUp({
      dalay: 10,
      time: 3000,
    });
  });
});
