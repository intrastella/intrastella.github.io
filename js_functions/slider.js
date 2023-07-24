
class sliderObserver {
  constructor(number) {
    this.no = number;
    this.init = number;
  }

  translation() {
    return this.init - this.no;
  }

  set current(number) {
    this.no = number;
  }

};


function responsive_sider() {

    const curSlide = new sliderObserver(1);
    set_slider(window.innerWidth, curSlide);

    window.addEventListener("resize", function () {

            const center = window.innerWidth * 0.5;
            const width_slide = 850;

            const slides = document.querySelectorAll(".slide");
            const post_cards = document.querySelectorAll(".post_card");
            const post_title = document.querySelectorAll(".post_title");

            init_slider(center, width_slide, slides, curSlide, post_cards, post_title);

            // set_slider(window.innerWidth, curSlide);

        });
};


function highlighted (i, slide_elem, post_cards, post_title) {

        post_cards[i].style.transform = "scale(1.2)";
        slide_elem.style.zIndex = "1000";
        post_cards[i].style.boxShadow = "0px 0px 200px #444444";
        post_title[i].style.color = "#4183C4";
        post_cards[i].style.backgroundColor = "#ffffff";

};


function backgroundArticle (i, slide_elem, post_cards, post_title) {

        slide_elem.style.zIndex = "1";
        post_cards[i].style.transform = "scale(1)";
        post_cards[i].style.boxShadow = "0px 0px 0px";
        post_cards[i].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        post_title[i].style.color = "#092b44";

};


function init_slider (center, width_slide, slides, curSlide, post_cards, post_title) {

    slides.forEach((slide, idx) => {

          // alert(curSlide.no);

          slide.style.setProperty("WebkitTransform", "none");

          slide.style.left = center - 0.5 * width_slide - curSlide.init * width_slide + idx * width_slide + "px";

          if (idx < curSlide.no) {

                post_cards[idx].style.backgroundColor = "rgba(0, 0, 0, 0.5)";

          } else if (idx === curSlide.no) {

                highlighted (idx, slide, post_cards, post_title);

          } else {

                backgroundArticle (idx, slide, post_cards, post_title);

          }


    });

};


function set_slider(screen_width, curSlide) {

    const center = screen_width * 0.5;
    const width_slide = 850;

    const slides = document.querySelectorAll(".slide");
    const post_cards = document.querySelectorAll(".post_card");
    const post_title = document.querySelectorAll(".post_title");


    // insert articles in order with features
    init_slider(center, width_slide, slides, curSlide, post_cards, post_title);

    // create next movement

    const nextSlide = document.querySelector(".btn-next");

    nextSlide.addEventListener("click", function () {

        slides.forEach((slide, idx) => {
            slide.style.transform = `translateX(${width_slide * (curSlide.init - ((curSlide.no + 1) % slides.length))}px)`;
          });
        curSlide.current = (curSlide.no + 1) % slides.length;

        // change highlights
        slides.forEach((slide, idx) => {
            if (idx === curSlide.no) {
                    highlighted (idx, slide, post_cards, post_title);

            } else {
                    backgroundArticle (idx, slide, post_cards, post_title);
            }
        });

    });

    // create prev movement

    const prevSlide = document.querySelector(".btn-prev");

    prevSlide.addEventListener("click", function () {

            if (curSlide.no - 1 < 0) {
                curSlide.current = 4;
            } else {
                curSlide.current = curSlide.no - 1;
            }

            slides.forEach((slide, idx) => {
                slide.style.transform = `translateX(${width_slide * (curSlide.init - curSlide.no)}px)`;
            });
            // change highlights

            slides.forEach((slide, idx) => {
                if (idx === curSlide.no) {
                        highlighted (idx, slide, post_cards, post_title);

                } else {
                        backgroundArticle (idx, slide, post_cards, post_title);
                }
            });

    });


};
