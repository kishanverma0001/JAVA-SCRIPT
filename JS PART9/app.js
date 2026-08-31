let smallImages = document.getElementsByClassName("oldImg");

for(let i = 0;i<smallImages.length;i++){
    // smallImages[i].src = "assets/spiderman_img.png";
    // console.log(`value of image no. ${i} is changed.`)
    console.dir(smallImages[i]);
}

let tagName = document.getElementsByTagName("p");
console.dir(tagName);

// query selector
console.dir(document.querySelector('h1'));
console.dir(document.querySelector('#description'));
console.dir(document.querySelector('.oldImg'));

console.dir(document.querySelectorAll('.oldImg:nth-of-type(n)'));

// setting content in objects
let para = document.querySelector('p');
console.log(para.innerText);
console.log(para.textContent);
console.log(para.innerHTML);
// para.innerText = "Hi, I am peter parker";
let kishan = document.querySelector('p');
console.log(para.innerText);
// para.innerHTML = "Hi, I am <b>peter parker</b>"

console.log(para.textContent);
console.log(para.innerHTML);

// Manipulating attributes getters or setters

let img = document.querySelector('Img');
console.log(img);
console.log(img.getAttribute('id'));
// console.log(img.setAttribute('id', 'spidermanImg'))

// Manipulating style
let heading  = document.querySelector("h1");
// console.log(heading.style.color = "purple");
// console.log(heading.style.backgroundColor = "pink");

let links = document.querySelectorAll(".box a");
for(link of links){
    link.style.color = "purple";
}

// using classList
// let img = document.querySelector("img");
console.log(img.classList);

// classList
console.log(heading.classList);

// classList.add()
console.log(heading.classList.add("green")); // add class
console.log(heading.classList.add("underline")); // add class

// classList.remove()
console.log(heading.classList.remove("green")); // remove class

//classList.contains()
console.log(heading.classList.contains("green")); // false
console.log(heading.classList.contains("underline")); // true

// classList.toggle()
console.log(heading.classList.toggle("green")); // true
console.log(heading.classList.toggle("underline")); // false  

// Navigation
let h4 = document.querySelector("h4");
console.log(h4.parentElement);
console.log(h4.children);

let box  = document.querySelector(".box");
console.log(box.children);
console.log(box.childElementCount);

let ul = document.querySelector("ul");
console.log(ul.children);
console.log(ul.childElementCount);

console.log(ul.children[1].previousElementSibling); // publisher
console.log(ul.children[1].nextElementSibling);

console.log(img.previousElementSibling.style.color = "purple");


// Adding Element
let newP = document.createElement("p");
newP.innerText = "Hi, I am a new p";
console.log(newP);
let body = document.querySelector("body");
body.appendChild(newP);

let button = document.createElement("button");
button.innerText = "click me!";
box.appendChild(button);

// append
newP.append(" this is new text ");
let button2 = document.createElement("button");
button2.innerText = "click me!";
newP.append(button2);
newP.append(" do not click this button");

// prepend
let p2 = document.createElement("p");
p2.append("this is p2 created for prepend");
box.prepend(p2);

// insertAdjacentElement(position, element)

let newBtn1 = document.createElement("button");
newBtn1.innerText = "NEW BUTTON1";

let newBtn2 = document.createElement("button");
newBtn2.innerText = "NEW BUTTON2";

let newBtn3 = document.createElement("button");
newBtn3.innerText = "NEW BUTTON3";

let newBtn4 = document.createElement("button");
newBtn4.innerText = "NEW BUTTON4";

let p = document.querySelector("p");
p.insertAdjacentElement("beforebegin",newBtn1); // before begining of paragraph

p.insertAdjacentElement("afterbegin",newBtn2); // after begining of paragraph

p.insertAdjacentElement("beforeend",newBtn3); // before ending of paragraph
p.insertAdjacentElement("afterend",newBtn4); // after ending of paragraph

console.log(p.childElementCount);
console.log(p.children);

// remove element
// body.removeChild(newP);
// button.remove();