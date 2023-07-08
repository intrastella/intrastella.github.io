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
         sendJ();
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

function sendJ() {
    var new_dict = {"one" : [15, 4.5],
            "two" : [34, 3.3],
            "three" : [67, 5.0],
            "four" : [32, 4.1]};

    fetch('http://127.0.0.1:4000/comments/2023-7-6-VAE.json', {
      method: 'POST',
      headers: {
          'Content-Type':'application/json'
      }
      body: JSON.stringify(new_dict)
      })
      .then(res => res.json())
      .then(json => alert(json))
}

function postData(input) {
    $.ajax({
        type: "POST",
        url: "/pca.py",
        data: { param: input },
        success: callbackFunc
    });
}

function callbackFunc(response) {
    // do something with the response
    alert(response);
}

postData('data to process');


function writeJson() {

    var response = [{ color: "#8B0000",  data: [{ "y":  12000,  "x":  0}],  pointRange: 8,  type: "column",  name: "Segment1"}, { color: "#FFA500",  data: [{ "y":  11000,  "x":  10}],  pointRange: 12,  type: "column",  name: "Segment2"}, { color: "#11ddbb",  data: [{ "y":  10000,  "x":  19}],  pointRange: 6,  type: "column",  name: "Segment3"}, { color: "#8B0000",  data: [{ "y":  8000,  "x":  24}],  pointRange: 5,  type: "column",  name: "Segment4"}];
    var jsonString = JSON.stringify(response);
    var jsonObject = JSON.parse(response);

    var new_dict = {"one" : [15, 4.5],
            "two" : [34, 3.3],
            "three" : [67, 5.0],
            "four" : [32, 4.1]};

    var fs = require('fs')

    fs.readFile('/home/stella/json_data.json', function (err, data) {
        var json = JSON.parse(data)
        json.push(new_dict)
        fs.writeFile('/home/stella/json_data.json', JSON.stringify(json))
    })
}

function openJson() {

    filepath = ''
    const fs = require('fs');
    fs.readFile(filepath)
}

$(function() {


   var people = [];

   $.getJSON('people.json', function(data) {
       $.each(data.person, function(i, f) {
          var tblRow = "<tr>" + "<td>" + f.firstName + "</td>" +
           "<td>" + f.lastName + "</td>" + "<td>" + f.job + "</td>" + "<td>" + f.roll + "</td>" + "</tr>"
           $(tblRow).appendTo("#userdata tbody");
     });

   });

});

