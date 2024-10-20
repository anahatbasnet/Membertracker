$('.slick-wrapper').slick({
  prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-up" style="color:#ffffff"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-down" style="color:#ffffff"></i></button>',
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000, // adjust this value as needed
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
