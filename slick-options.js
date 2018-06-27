$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  draggable: true,
  asNavFor: '.slider-nav'
});


$('.slider-nav').slick({
  slidesToShow: 4,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  vertical: true,
  arrows: false,
  infinite: false,
  draggable: true,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        draggable: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        draggable: true,
        asNavFor: false,
        vertical: false,
        asNavFor: false,
        arrows: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
