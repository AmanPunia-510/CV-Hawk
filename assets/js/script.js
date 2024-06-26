const menu = document.querySelector(".menubar");
let items = document.querySelector(".navbar-items");

menu.addEventListener("click", () => {
  items.classList.toggle("left-0");
  let body = document.querySelector("body");

  if (items.classList.contains("left-0")) {
    body.style.position = "fixed";
    body.style.top = "0";
    body.style.left = "0";
    body.style.width = "100%";
  } else {
    body.style.position = "unset";
  }
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
  let svg = items.querySelector(".accordian-svg");

  accordion_title.addEventListener("click", () => {
    accordion_boxes.forEach((otherBox) => {
      if (otherBox !== items) {
        let otherAccordion_p = otherBox.querySelector(".accordian-p");
        const svg = otherBox.querySelector(".accordian-svg");
        otherAccordion_p.classList.add("d-none");
        svg.style.transform = "rotate(0deg)";
        svg.style.right = "0px";
      }
    });

    if (accordion_p.classList.contains("d-none")) {
      accordion_p.classList.remove("d-none");
      accordion_p.classList.add("d-inline-block");
      svg.style.transform = "rotate(180deg)";
      svg.style.position = "relative";
      svg.style.right = "33px";
    } else {
      accordion_p.classList.add("d-none");
      accordion_p.classList.remove("d-inline-block");
      svg.style.transform = "rotate(0deg)";
      svg.style.right = "0px";
    }
  });
});
