let body = document.querySelector("body");


let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click me";

input.placeholder = "username";
button.setAttribute("id", "btn");

body.append(input);
body.append(button);
let b1 = document.querySelector("#btn");
b1.style.color = "white";
b1.style.backgroundColor = "blue";

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.style.color = "purple";
h1.style.textDecoration = "underline";

body.append(h1);

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(p);