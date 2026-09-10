let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");


btn.addEventListener("click", function () {  
    let item = document.createElement("li");
    item.innerText = inp.value;

    if(inp.value.trim() == ""){
        return;
    }

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

// event delegation
ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON"){
      let listItem = event.target.parentElement; // event bubbling
    //   console.log(listItem);
    //   console.log("delete");
      listItem.remove();
    }
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }