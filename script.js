$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,

  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true,
    },
    600: {
      items: 2,
      nav: false,
      dots: true,
    },
    1000: {
      items: 4,
      nav: false,
      loop: true,
    }
  }
})


var owl = $('.owl-carousel');
owl.owlCarousel();
$('.arrow_type_left').click(function () {
  owl.trigger('prev.owl.carousel');
})

$('.arrow_type_right').click(function () {
  owl.trigger('next.owl.carousel');
})
