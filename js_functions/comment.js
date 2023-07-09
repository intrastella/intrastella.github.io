function CreateTextFile() {

         var quest_text = document.getElementById("quest").value;
         var name_text = document.getElementById("fname").value;

         element = document.getElementById("sub");

         var bodyRect = document.body.getBoundingClientRect();
         elemRect = element.getBoundingClientRect();
         pos = elemRect.top;
         x = elemRect.top - bodyRect.top;

         // ** create text **

         var top_level = x - 550
         var rand = Math.random()
         var random_left = Math.floor(10 + 100 * rand)

         let box = document.createElement("div");
         box.style.top = top_level + "px";
         box.style.position = "absolute";
         box.style.left = random_left + "px";
         box.style.width = "400px";

         // name

         let fname = document.createElement("p");
         fname.innerHTML = name_text;
         fname.className = "comment_txt";
         fname.style.fontSize = "30px";
         fname.style.color = "rgba(93, 182, 226, 0.6)";
         fname.style.textDecoration = "underline";
         fname.style.fontWeight = "900";

         // comment

         let txt = document.createElement("p");
         txt.innerHTML = quest_text;
         txt.className = "comment_txt";
         txt.style.fontSize = "30px";
         txt.style.color = "rgba(93, 182, 226, 0.6)";

         // rgba(82, 15, 15, 0.5)

         var comment = document.getElementById("comment_section");

         comment.appendChild(box);
         box.appendChild(fname);
         box.appendChild(txt);

         makeVisible();
      }


function makeVisible() {
    const box = document.getElementsByClassName('comment_txt');

    for (let i = 0; i < box.length / 2; i++) {
        // ️ Change text color on mouseover
        box[2*i+1].addEventListener('mouseover', function handleMouseOver() {
        box[2*i+1].style.color = 'rgba(82, 15, 15, 0.5)';
        box[2*i].style.color = 'rgba(82, 15, 15, 0.5)';
        });

        //  Change text color back on mouseout
        box[2*i+1].addEventListener('mouseout', function handleMouseOut() {
        box[2*i+1].style.color = 'rgba(93, 182, 226, 0.6)';
        box[2*i].style.color = 'rgba(93, 182, 226, 0.6)';
        });
    }

}

