function changeText(sel) {
    var selected = document.querySelectorAll(sel);
    for (var i = 0; i < selected.length; i++) {
        selected[i].style.fontStyle = "italic";
        selected[i].style.fontWeight = "bold";
        selected[i].style.textDecoration = "underline";
    }
}

//------------------------------------------------------

function turnIntoArray(classy) {
    var classArray = [];
    var classOrigin = document.getElementByClassName(classy);
    for (var i = 0; i < classOrigin.length; i++) {
        classArray.push(classOrigin[i]);
    }
    return classArray;
}

//------------------------------------------------------

function awesome() {
    var wow = document.createElement("div");
    var word = document.createTextNode("AWESOME");
    wow.appendChild(word);
    // would also work with wow.innerText = "AWESOME" instead of line 25 and 26
    wow.style.position = "fixed";
    wow.style.zIndex = "2147483647";
    wow.style.left = "20px";
    wow.style.top = "100px";
    wow.style.fontSize = "200px";
    document.body.appendChild(wow);
}
