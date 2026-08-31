let body = document.querySelector("body");

let p = document.createElement("p");
p.innerText = "Hey I'm red!"
p.classList.add("red");
// p.style.color = "red";
body.append(p);

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3";
h3.classList.add("blue");
// h3.style.color = "blue";
body.append(h3);

let div = document.createElement("div");
let h1 = document.createElement("h1");
let p2 = document.createElement("p");

h1.innerText = "I'm in a div";
p2.innerText = "ME TOO!";

div.classList.add("box");
div.append(h1,p2);
body.append(div);