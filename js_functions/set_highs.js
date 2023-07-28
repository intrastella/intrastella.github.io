let txt_docs = document.getElementsByClassName("highlighted");
let latex_high = document.getElementsByClassName("latex_high");

function set_high() {
        const url = window.location.pathname;
        var parent = url.substring(url.indexOf('/')+1, url.lastIndexOf('/'));

        const subjects = ['linear_algebra', 'analysis', 'algebra', 'algebraic_geometry', 'comp_ana', 'topo', 'stat', 'funk_ana', 'diff_geo'];

        if (subjects.includes(parent)) {

            responsible_page();
            collapse_drops();

            window.addEventListener("resize", function () {
                responsible_page();
            });

        }

        // for comments
        insertComments(parent);

        if (parent === "subject") {

            // for folder w/ subjects
            var icons = document.querySelectorAll('.border_sec');
            var x=0, y0=0, y1=0, y2=0;

            const move_top = [
                { transform: `translate(${x}px, ${y1}px)` },
                { transform: `translate(${x}px, ${y1 -40}px)` },
                { transform: `translate(${x}px, ${y1 -40}px) scale(1.2, 1.2)` },
            ];

            const move_down = [
                { transform: `translate(${x}px, ${y2}px)` },
                { transform: `translate(${x}px, ${y2 +40}px)` },
                { transform: `translate(${x}px, ${y2 +40}px) scale(1.2, 1.2)` },
            ];

            const move_in = [
                { transform: `translate(${x}px, ${y0}px)` },
                { transform: `scale(1.2, 1.2)` },
            ];

            const idle = [
              { transform: "translate3d(0px, 0px, 0px)" },
            ];

            const a = "transition: all 2s ease; transform: scale3d(1.5, 1.5, 1) ;";


            const Timing = {
              duration: 600,
              iterations: 1,
              fill: 'forwards'
            };

            const Timing2 = {
              delay: 600,
              duration: 600,
              iterations: 1,
            };

                for (var i = 0; i < icons.length; i++) {

                    icons[i].addEventListener("mouseenter", function() {
                        (this).style.borderColor = "#ffffff";
                        (this.querySelectorAll(".txt_subject1")[0]).animate(move_top, Timing, y1 -= 40);
                        (this.querySelectorAll(".txt_subject2")[0]).animate(move_down, Timing, y2 += 40);
                        (this.querySelectorAll(".txt_subject1")[0]).style.color = "#ffffff";
                        (this.querySelectorAll(".txt_subject2")[0]).style.color = "#ffffff";

                    });

                    icons[i].addEventListener("mouseleave", function() {
                        //(this.querySelectorAll(".txt_subject")[0]).style.cssText = scale_down;
                        (this).style.borderColor = "rgba(0, 0, 0, 0.5)";
                        (this.querySelectorAll(".txt_subject1")[0]).animate(idle, Timing);
                        (this.querySelectorAll(".txt_subject2")[0]).animate(idle, Timing);
                        (this.querySelectorAll(".txt_subject1")[0]).style.color = " rgba(0, 0, 0, 0.5)";
                        (this.querySelectorAll(".txt_subject2")[0]).style.color = " rgba(0, 0, 0, 0.5)";

                    });
                }

                for (var i = 0; i < icons.length; i++) {

                    icons[i].addEventListener("mouseenter", function() {
                        (this.querySelectorAll(".txt_subject0")[0]).animate(move_in, Timing, y0 -= 40);
                        (this.querySelectorAll(".txt_subject0")[0]).style.color = "#ffffff";

                    });

                    icons[i].addEventListener("mouseleave", function() {
                        //(this.querySelectorAll(".txt_subject")[0]).style.cssText = scale_down;
                        (this.querySelectorAll(".txt_subject0")[0]).animate(idle, Timing);
                        (this.querySelectorAll(".txt_subject0")[0]).style.color = " rgba(0, 0, 0, 0.5)";

                    });
                }
        }

        var obj_type = parent.substring(0, parent.indexOf('_'));
        if (obj_type === "article" || subjects.includes(parent)) {

            for (let i = 0; i < txt_docs.length; i++) {

                let txt = txt_docs[i].textContent;
                document.getElementById("pre_txt_high").outerHTML = "";
                find_highs(txt_docs[i], txt);

            };

            for (let i = 0; i < latex_high.length; i++) {

                let latex_span1 = document.getElementById('latex1');
                let latex_span2 = document.getElementById('latex2');

                let txt = latex_high[i].textContent;
                document.getElementById("pre_txt_high").outerHTML = "";
                find_highs(latex_span1, txt);

                latex_span1.appendChild(latex_span2);

            };
        }
};


function find_highs(parent, txt) {

    // alert('input: ' + txt);

    var new_text = "";

    var sym_link = {
        0: "**",
        1: "/c/",
    };

    var index_symbols = [];

    for(var key in sym_link) {
        var value = sym_link[key];
        if (txt.indexOf(value) < 0) {
            index_symbols.push(10000000);
        } else {
            index_symbols.push(txt.indexOf(value));
        }
    };

    // alert('indexes for each symbol: ' + index_symbols);

    const found = ['*', '/'].some(el=> txt[0] === el);

        if (found) {
            var detected_index = index_symbols.indexOf(Math.min.apply(Math, index_symbols));
            var detected_symbol = sym_link[detected_index];

        } else {
            var detected_symbol = "default";
        }

        // alert('found: ' + found);
        // alert('detected: ' + detected_symbol);

        switch (detected_symbol) {
            case "**":
            new_text = find_bold(parent, txt);
            break;

            case "/c/":
            new_text = find_color(parent, txt);
            break;

            case "default":
            new_text = set_default(parent, txt);
            break;
        };

        // alert('new text: ' + new_text);

        if (new_text.length > 0) {
            find_highs(parent, new_text);
        };

};


function find_bold(parent, txt) {

            // alert("INSIDE BOLD");

            // find bold
            const searchTerm = '**';
            var indexOfStarEnd = txt.indexOf(searchTerm, (2));
            var bold_text = txt.substring(2, indexOfStarEnd);

            // create bold_text
            var bold_span = document.createElement('span');
            bold_span.textContent = bold_text;
            bold_span.style.color = '#b48d8c'; //  choice : e97977 , orange: fea11d , gray 6f6261, light red : b48d8c , light orange: f1c17d
            bold_span.style.fontWeight = "900";
            parent.appendChild(bold_span);

            return txt.substring(indexOfStarEnd + 2, txt.length);

};



function find_color(parent, txt) {

            // alert("INSIDE COLOR");

            // find color
            const searchTerm = "/c/";
            var indexOfColorEnd = txt.indexOf(searchTerm, (3));
            var color_text = txt.substring(3, indexOfColorEnd);

            // create color_text
            var color_span = document.createElement('span');
            color_span.textContent = color_text;
            color_span.style.color = '#5dbde4'; // dark blue : 0b3e63
            parent.appendChild(color_span);

            return txt.substring(indexOfColorEnd + 3, txt.length);

};


function set_default(parent, txt) {
    // alert("INSIDE DEFAULT")

    const sym1 = "*";
    const sym2 = "/";

    if (txt.indexOf(sym1) === -1) {
        var indexOfSym1 = 100000000
    } else {
        var indexOfSym1 = txt.indexOf(sym1);
    }

    if (txt.indexOf(sym2) === -1) {
        var indexOfSym2 = 100000000
    } else {
        var indexOfSym2 = txt.indexOf(sym2);
    }

    var pos = Math.min(indexOfSym1, indexOfSym2)
    var normal_text = txt.substring(0, pos);

    // alert(normal_text);
    // alert(pos)

    var normal_span = document.createElement('span');
        normal_span.textContent = normal_text;
        normal_span.style.color = '$gray';
        parent.appendChild(normal_span);

    return txt.substring(pos, txt.length);


};


function insertComments(parent) {

    var obj_type = parent.substring(0, parent.indexOf('_'));

    if (obj_type === "article") {

        var article = parent.substring(parent.indexOf('_')+1);
        const appScriptURL = "https://script.googleusercontent.com/macros/echo?user_content_key=HtveZV10FG4bsp4WEL8OjJJEAjiiz-BXYyOmSCMPkifQ6nQhm3BSAErwrbdtQ7GEQLPZZ7AlpELWJfGP8mH61k7HXEXvhMalm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKSSFysLyohqCDC0R9hOyjd51k083NLWrNsDQ_XumwyvICfdyEnb0bdknWTm22ngiO7R-FfL0hwxSL4rVaTK3T7wjxHoH5hJrNz9Jw9Md8uu&lib=MGPZxz-P7tcjz-41s6vfEi2fqToxuHLv9"

        fetch(appScriptURL)
          .then(res => res.json())
          .then(res => {

            const values = res.values;

            // X: 0 = Columns, 1 = 1st user, 2 = 2nd user, ..., n = nth user
            // Y: 0 = timestamp, 1 = name, 2 = comment, 3 = article, 4 = top, 5 = left

            // values[i][j] returns the i-th user j-th column, where i \in [1, n] and j \in [0, 5]

            for (let i = 1; i < values.length; i++) {

                if (values[i][3] == article) {

                    // create a user comment area
                    let box = document.createElement("div");
                    box.style.top = values[i][4];
                    box.style.position = "absolute";
                    box.style.left = values[i][5];
                    box.style.width = "400px";

                    // insert the users name
                    let fname = document.createElement("p");
                    fname.innerHTML = values[i][1];
                    fname.className = "comment_txt";
                    fname.style.fontSize = "30px";
                    fname.style.color = "rgba(93, 182, 226, 0.6)";
                    fname.style.textDecoration = "underline";
                    fname.style.fontWeight = "900";

                    // insert the users comment
                    let txt = document.createElement("p");
                    txt.innerHTML = values[i][2];
                    txt.className = "comment_txt";
                    txt.style.fontSize = "30px";
                    txt.style.color = "rgba(93, 182, 226, 0.6)";

                    var comment = document.getElementById("comment_section");

                     comment.appendChild(box);
                     box.appendChild(fname);
                     box.appendChild(txt);

                     makeVisible();

                 }

            }


          });
    }

};


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

function collapse_drops() {

        var elements = document.querySelectorAll('[data-toggle="collapse"]');
        elements.forEach(element => element.addEventListener('click', collapse));

        function collapse() {
          var target = this.getAttribute('data-target');
          var element = document.getElementById(target);
          if (element.style.display === "none") {
            element.style.display = "block";
            $('button').attr('data-text', '–');
          } else {
            element.style.display = "none";
            $('button').attr('data-text', '+');
          }
        };
};


function responsible_page() {

    let page = document.querySelector('#page_subject');

    const win_size = window.innerWidth;
    const markers_left = 1630;
    const default_window_width = 1920;
    const default_page_width = 1500;

    const scale = win_size / default_window_width;

    const marker_right_margin = 55;
    const marker_width = 200;
    const scaled_marker_right_margin = marker_right_margin * scale;
    const marker_left = win_size - (marker_width + scaled_marker_right_margin);
    marker_feat(Math.round(marker_left));

    const new_page_width = Math.round(default_page_width * scale);
    document.getElementById("main").style.width = win_size + "px";
    document.getElementById("main").style.top = "0px";
    document.getElementById("main").style.backgroundColor = "rgba(255, 255, 255,  0.1)";
    page.style.width = new_page_width + "px";
    page.style.top = "5%";

    if (win_size < 1920) {

        const gif_containers = document.querySelectorAll(".gif_container");
        gif_containers.forEach((gif_container, idx) => {
            // new_page_width
            gif_container_css = "position: relative; padding: 10px; display: flex; justify-content: center; background-color: rgba(119, 138, 153, 0.2); width: " + `${new_page_width - 100}px;`
            gif_container.style.cssText = gif_container_css;
        });

        const gif_lefts = document.querySelectorAll(".gif_left");
        gif_lefts.forEach((gif_left, idx) => {

            let fig = document.querySelector('.gif_left figcaption');
            let fig_img = document.querySelector('.gif_left img');

            const caption_css = "display: table-caption; caption-side: bottom;";
            fig.style.cssText = caption_css;

            const fig_css = "display: table;";
            gif_left.style.cssText = fig_css;

            fig_img.style.cssText = "";

        });

    } else {

        const gif_containers = document.querySelectorAll(".gif_container");
        gif_containers.forEach((gif_container, idx) => {
            // new_page_width
            gif_container_css = "position: relative; padding: 10px; display: flex; justify-content: center; background-color: rgba(119, 138, 153, 0.2); width: " + `${new_page_width - 100}px;`
            gif_container.style.cssText = gif_container_css;
        });

        const gif_lefts = document.querySelectorAll(".gif_left");
        gif_lefts.forEach((gif_left, idx) => {

            let fig = document.querySelector('.gif_left figcaption');
            let fig_img = document.querySelector('.gif_left img');

            const caption_css = "position: relative; caption-side: right; word-wrap: break-word; padding: 10px;";
            fig.style.cssText = caption_css;

            const fig_css = "display: flex; align-items: center";
            gif_left.style.cssText = fig_css;

            const img_css = "width: 1000px; position: relative;";
            fig_img.style.cssText = img_css;

        });

    }

};


function marker_feat(marker_left) {

    const url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    let button_id = document.getElementById(filename);
    const pages = document.querySelectorAll(".page");
    const markers = document.querySelectorAll(".marker");

    pages.forEach((page, idx) => {
         page.style.zIndex = "-1";
    });

    markers.forEach((marker, idx) => {
          marker.style.zIndex = "-10000";

          var top_pos = 280 + 80 * (1 + idx)

          marker_attr = "width: 200px;height: 70px;background-color: rgba(87, 32, 29, 0.7);border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;font-size: 18px;z-index: -100;margin: 15px;position: absolute; left:" + `${marker_left}px;top:${top_pos}px;`;
          marker.style.cssText = marker_attr;
    });

    button_id.style.zIndex = "10000";


}

