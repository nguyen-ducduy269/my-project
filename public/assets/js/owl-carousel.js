$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".big-one").owlCarousel({
  loop: true,
  Infinity: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 50000,
  responsive: {
    0: {
      items: 1,
    },
    320: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".slick-track").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 10000,
  responsive: {
    0: {
      items: 1,
    },
    320: {
      items: 2,
    },
    600: {
      items: 3,
    },
    800: {
      items: 2,
    },
    1000: {
      items: 4,
    },
    1200: {
      items: 4,
    },
  },
});

$(".new-deals").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 30000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 2,
    },
  },
});
