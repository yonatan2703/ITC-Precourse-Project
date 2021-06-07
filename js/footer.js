// Gets an array of strings and prints a text on the site for the element with the code-lang id.
function languagesUsed (array) {
    let txt = "This page was built using: "
    for (i = 0; i < array.length-1; i++) {
        txt += `${array[i]}, `
    }
    txt += `and ${array[array.length-1]}`
    document.getElementById("code-lang").innerHTML = txt;
    }

    let arr = ["HTML", "CSS", "JavaScript"];
    languagesUsed(arr);