
function set_slider() {

    alert("Function is being called");

    // var screen_width = window.innerWidth;
    // var h = window.innerHeight;
    
    // let screen_width = $(window).width();
    var screen_width = 1900;
    const center = screen_width * 0.5;

    const width_slide = 850;
    const start = center - (1.5 * width_slide);
    const post2 = start + width_slide;

    alert("post params");


        // Select all slides
    const slides = document.querySelectorAll(".slide");
    alert("slides");
    const post_cards = document.querySelectorAll(".post_card");
    alert("post card");
    const post_title = document.querySelectorAll(".post_title");

    alert("start with setup carousel");


    // loop through slides and set each slides translateX property to index * 100%
    slides.forEach((slide, idx) => {

          if (idx === 0) {

                slide.style.left = start + "px";
                post_cards[idx].style.backgroundColor = "rgba(0, 0, 0, 0.5)";

          } else if (idx === 1) {

                post_cards[idx].style.transform = "scale(1.2)";
                slide.style.left = post2 + "px";
                slide.style.zIndex = "1000";
                post_cards[idx].style.boxShadow = "0px 0px 200px #444444";
                post_title[idx].style.color = "#4183C4";

          } else {

                slide.style.left = post2 + width_slide * (idx - 1) + "px";
                slide.style.zIndex = "1";
                post_cards[idx].style.backgroundColor = "rgba(0, 0, 0, 0.5)";

          }


    });

        // current slide counter
    let curSlide = 1;

    // select next slide button
    const nextSlide = document.querySelector(".btn-next");


        // maximum number of slides
    let maxSlide = slides.length - 1;

    // add event listener and navigation functionality
    nextSlide.addEventListener("click", function () {

      if (curSlide === maxSlide) {
        slides.forEach((slide, idx) => {
            slide.style.transform = `translateX(${width_slide}px)`;
        });
        curSlide = 0;

        slides.forEach((slide, idx) => {
            if (idx === curSlide) {
                    post_cards[idx].style.transform = "scale(1.2)";
                    slide.style.zIndex = "1000";
                    post_cards[idx].style.boxShadow = "0px 0px 200px #444444";
                    post_title[idx].style.color = "#4183C4";
                    post_cards[idx].style.backgroundColor = "#ffffff";

            } else {
                    slide.style.zIndex = "1";
                    post_cards[idx].style.transform = "scale(1)";
                    post_cards[idx].style.boxShadow = "0px 0px 0px";
                    post_cards[idx].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                    post_title[idx].style.color = "#092b44";
            }
        });

      } else {

        slides.forEach((slide, idx) => {
            slide.style.transform = `translateX(${-width_slide * curSlide}px)`;
          });
        curSlide++;

        slides.forEach((slide, idx) => {
            if (idx === curSlide) {
                    post_cards[idx].style.transform = "scale(1.2)";
                    slide.style.zIndex = "1000";
                    post_cards[idx].style.boxShadow = "0px 0px 200px #444444";
                    post_title[idx].style.color = "#4183C4";
                    post_cards[idx].style.backgroundColor = "#ffffff";

            } else {
                    slide.style.zIndex = "1";
                    post_cards[idx].style.transform = "scale(1)";
                    post_cards[idx].style.boxShadow = "0px 0px 0px";
                    post_cards[idx].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                    post_title[idx].style.color = "#092b44";
            }
        });

      }

    });

        // select prev slide button
    const prevSlide = document.querySelector(".btn-prev");

    // add event listener and navigation functionality
    prevSlide.addEventListener("click", function () {

      if (curSlide === 0) {

        slides.forEach((slide, idx) => {
            slide.style.transform = `translateX(${- (maxSlide - 1) * width_slide}px)`;
        });
        curSlide = maxSlide;

        slides.forEach((slide, idx) => {
            if (idx === curSlide) {
                    post_cards[idx].style.transform = "scale(1.2)";
                    slide.style.zIndex = "1000";
                    post_cards[idx].style.boxShadow = "0px 0px 200px #444444";
                    post_title[idx].style.color = "#4183C4";
                    post_cards[idx].style.backgroundColor = "#ffffff";

            } else {
                    slide.style.zIndex = "1";
                    post_cards[idx].style.transform = "scale(1)";
                    post_cards[idx].style.boxShadow = "0px 0px 0px";
                    post_cards[idx].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                    post_title[idx].style.color = "#092b44";
            }
        });

      } else if (curSlide - 1 === 0) {

            slides.forEach((slide, idx) => {
                slide.style.transform = `translateX(${width_slide}px)`;
              });
            curSlide--;

            slides.forEach((slide, idx) => {
                if (idx === curSlide) {
                        post_cards[idx].style.transform = "scale(1.2)";
                        slide.style.zIndex = "1000";
                        post_cards[idx].style.boxShadow = "0px 0px 200px #444444";
                        post_title[idx].style.color = "#4183C4";
                        post_cards[idx].style.backgroundColor = "#ffffff";

                } else {
                        slide.style.zIndex = "1";
                        post_cards[idx].style.transform = "scale(1)";
                        post_cards[idx].style.boxShadow = "0px 0px 0px";
                        post_cards[idx].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                        post_title[idx].style.color = "#092b44";
                }
            });

      } else {

            slides.forEach((slide, idx) => {
                slide.style.transform = `translateX(${ width_slide * (curSlide - 1 - 1) }px)`;
              });
            curSlide--;

            slides.forEach((slide, idx) => {
                if (idx === curSlide) {
                        post_cards[idx].style.transform = "scale(1.2)";
                        slide.style.zIndex = "1000";
                        post_cards[idx].style.boxShadow = "0px 0px 200px #444444";
                        post_title[idx].style.color = "#4183C4";
                        post_cards[idx].style.backgroundColor = "#ffffff";

                } else {
                        slide.style.zIndex = "1";
                        post_cards[idx].style.transform = "scale(1)";
                        post_cards[idx].style.boxShadow = "0px 0px 0px";
                        post_cards[idx].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                        post_title[idx].style.color = "#092b44";
                }
            });

      }

    });


}
