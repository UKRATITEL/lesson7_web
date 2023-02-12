function run() {
    let htmlCOde = document.getElementById("html-code").value;
    let cssCOde = document.getElementById("css-code").value;
    let jsCOde = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
}
