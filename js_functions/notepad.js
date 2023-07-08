// Get the button:
let mybutton = document.getElementById("myBtn");

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function addFunction() {

    if (document.getElementById('notepad').style.visibility === 'hidden') {
        scale_up();
        document.getElementById('notepad').style.visibility = 'visible';
    } else {
        scale_down();
        document.getElementById('notepad').style.visibility = 'hidden';
    }
}

function scale_up() {
    document.getElementById("fname").style.width = "320px";
    document.getElementById("quest").style.width = "320px";
    document.getElementById("quest").style.height = "300px";
}

function scale_down() {
    document.getElementById("fname").style.width = "0px";
    document.getElementById("quest").style.width = "0px";
    document.getElementById("quest").style.height = "0px";
}
