function new_pos() {
    set_pos();

    window.addEventListener("resize", function () {

            set_pos();

        });
};


function set_pos() {

    var isAtMaxWidth = screen.availWidth - window.innerWidth === 0;

    const intro_space = document.getElementById("intro_space");
    const top_grid = document.getElementById("top_grid");
    const bottom_grid = document.getElementById("bottom_grid");
    const subject_page = document.getElementById("subject_page");

    const subjects = document.querySelectorAll(".subject");

    if (! isAtMaxWidth) {

        subject_page.style.height = "2400px";


        var intro_pos = window.innerWidth * 0.5 - 380;
        intro_space.style.left = `${intro_pos}px`;
        intro_space.style.top = "110px";

        var sub_top_pos = window.innerWidth * 0.5 - 500;
        top_grid.style.top = "700px";
        top_grid.style.left = `${sub_top_pos}px`;

        const new_grid = "grid-template-columns: 470px 470px; grid-template-rows: 470px 470px; column-gap: 87px; row-gap: 80px;";
        bottom_grid.style.cssText = new_grid;

        var sub_bottom_pos = window.innerWidth * 0.5 - 500;
        bottom_grid.style.top = "1270px";
        bottom_grid.style.left = `${sub_bottom_pos}px`;

        subjects.forEach((subject, idx) => {

            subject.style.width = "470px";
            subject.style.height = "470px";

            const border_secs = subject.querySelectorAll('.border_sec');

            border_secs.forEach((border_sec, idx) => {
                border_sec.style.width = "350px";
                border_sec.style.height = "350px";
            });

            const txt_subject0s = subject.querySelectorAll('.txt_subject0');
            const txt_subject1s = subject.querySelectorAll('.txt_subject1');
            const txt_subject2s = subject.querySelectorAll('.txt_subject2');

            txt_subject0s.forEach((txt_subject0, idx) => {
                txt_subject0.style.fontSize = "40px";
            });

            txt_subject1s.forEach((txt_subject1, idx) => {
                txt_subject1.style.fontSize = "40px";
                txt_subject1.style.left = "75px";
            });

            txt_subject2s.forEach((txt_subject2, idx) => {
                txt_subject2.style.fontSize = "40px";
                txt_subject2.style.right = "75px";
            });


        });

        document.getElementById("diffgeo").style.backgroundSize = "470px";
        document.getElementById("funk").style.backgroundSize = "470px";
        document.getElementById("stat").style.backgroundSize = "470px";
        document.getElementById("topo").style.backgroundSize = "470px";


    } else {

        subject_page.style.height = "100vh";

        intro_space.style.left = "50px";
        intro_space.style.top = "230px";

        top_grid.style.top = "110px";
        top_grid.style.left = "45%";

        const old_grid = "display: grid;grid-template-columns: 260px 260px 260px 260px;grid-template-rows: auto auto auto auto;column-gap: 3px;top: 680px;left: 45.5%;position: absolute;padding: 0px;width: 90%;"
        bottom_grid.style.cssText = old_grid;

        subjects.forEach((subject, idx) => {

            subject.style.width = "200px";
            subject.style.height = "200px";

            const border_secs = subject.querySelectorAll('.border_sec');

            border_secs.forEach((border_sec, idx) => {
                border_sec.style.width = "160px";
                border_sec.style.height = "160px";
            });

            const txt_subject0s = subject.querySelectorAll('.txt_subject0');
            const txt_subject1s = subject.querySelectorAll('.txt_subject1');
            const txt_subject2s = subject.querySelectorAll('.txt_subject2');

            txt_subject0s.forEach((txt_subject0, idx) => {
                txt_subject0.style.fontSize = "15px";
            });

            txt_subject1s.forEach((txt_subject1, idx) => {
                txt_subject1.style.fontSize = "15px";
                txt_subject1.style.left = "40px";
            });

            txt_subject2s.forEach((txt_subject2, idx) => {
                txt_subject2.style.fontSize = "15px";
                txt_subject2.style.right = "40px";
            });

        });

        document.getElementById("diffgeo").style.backgroundSize = "200px";
        document.getElementById("funk").style.backgroundSize = "200px";
        document.getElementById("stat").style.backgroundSize = "200px";
        document.getElementById("topo").style.backgroundSize = "200px";

    }


};