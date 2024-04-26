const menu = document.querySelector(".menubar");
let items = document.querySelector(".navbar-items");

menu.addEventListener("click", () => {
  items.classList.toggle("left-0");
});

$(".slick-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// second slider box

$(".main-slider-box").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: ".prev",
  nextArrow: ".next",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// accodian
let accordion_boxes = document.querySelectorAll(".accordian-box");

accordion_boxes.forEach((items) => {
  let accordion_title = items.querySelector(".accordian-h-svg");
  let accordion_p = items.querySelector(".accordian-p");

  accordion_title.addEventListener("click", () => {
    accordion_boxes.forEach((otherBox) => {
      if (otherBox !== items) {
        let otherAccordion_p = otherBox.querySelector(".accordian-p");
        otherAccordion_p.classList.add("d-none");
      }
    });

    if (accordion_p.classList.contains("d-none")) {
      accordion_p.classList.remove("d-none");
      accordion_p.classList.add("d-inline-block");
    } else {
      accordion_p.classList.add("d-none");
      accordion_p.classList.remove("d-inline-block");
    }
  });
});
