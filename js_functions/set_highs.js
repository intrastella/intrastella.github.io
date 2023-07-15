// Get text to highlight

let txt_docs = document.getElementsByClassName("highlighted");

function set_high() {
        for (let i = 0; i < txt_docs.length; i++) {

            let txt = txt_docs[i].textContent;
            document.getElementById("pre_txt_high").outerHTML = "";
            find_highs(txt_docs[i], txt);

        };
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
            bold_span.style.color = '#0b3e63'; //  choice : e97977 , orange: fea11d , gray 6f6261, light red : b48d8c , light orange: f1c17d
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
            color_span.style.color = '#b48d8c'; // dark blue : 0b3e63
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
