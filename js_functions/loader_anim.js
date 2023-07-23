

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

// document.getElementById("myElement").style.display = "none";


document.addEventListener("DOMContentLoaded", () => {
  let overlay = document.getElementsByClassName("overlay")[0];
  let loading = document.getElementsByClassName("loading")[0];

  setTimeout(() => {
    loading.remove();
    overlay.classList.add("loaded");
    var cnt = $(".overlay").contents();
    $(".overlay").replaceWith(cnt);
  }, 1000);
});

