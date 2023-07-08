function CreateTextFile() {

         var quest_text = document.getElementById("quest").value;
         var name_text = document.getElementById("fname").value;

         element = document.getElementById("sub");

         var bodyRect = document.body.getBoundingClientRect();
         elemRect = element.getBoundingClientRect();
         pos = elemRect.top - bodyRect.top - 910;
         x = elemRect.top - bodyRect.top;

         // ** create text **

         // name

         let fname = document.createElement("p");
         fname.innerHTML = name_text;
         fname.className = "comment_txt";

         var top_level = pos - 10

         fname.style.top = top_level + "px";
         fname.style.position = "relative";
         fname.style.left = "10px";
         fname.style.fontSize = "30px";
         fname.style.color = "rgba(93, 182, 226, 0.6)";
         fname.style.textDecoration = "underline";
         fname.style.fontWeight = "900";

         // comment

         let txt = document.createElement("p");
         txt.innerHTML = quest_text;
         txt.className = "comment_txt";

         txt.style.top = pos + "px";
         txt.style.position = "relative";
         txt.style.left = "10px";
         txt.style.fontSize = "30px";
         txt.style.color = "rgba(93, 182, 226, 0.6)";

         // rgba(82, 15, 15, 0.5)

         var comment = document.getElementById("comment_section");

         // ** create note button **From that perspective, sampled values from the latent variable are generated from an unknown prior distribution. Hence, we would like to construct a model based on that perspective.

         comment.appendChild(fname);
         comment.appendChild(txt);

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
