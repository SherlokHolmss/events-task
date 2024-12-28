const buttonWrap = document.querySelector(".button-wrap");
const div = document.querySelector(".div");
const button = document.querySelector(".button");


function addDivContent(event){
    if (event.target !== event.currentTarget) {
        div.innerText += event.target.innerText + ', ';
        event.target.setAttribute("class", "button-disabled");
        event.target.disabled = true;
    }
}

buttonWrap.addEventListener("click", addDivContent);

