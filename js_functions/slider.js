
function set_slider() {

    var innerwidth = window.innerWidth;
    // var h = window.innerHeight;
    
    var screen_width = $(window).width();
    const center = screen_width * 0.5;

    const width_slide = 850;
    const start = center - (1.5 * width_slide);
    const post2 = start + width_slide;

    alert("innerwidth");
    alert("screen_width");


     // Select all slides
    const slides = document.querySelectorAll(".slide");
    alert("slides");
    const post_cards = document.querySelectorAll(".post_card");
    alert("post card");
    const post_title = document.querySelectorAll(".post_title");

    alert("start with setup carousel");


};
