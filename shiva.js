let shoppingitem = document.querySelectorAll(".shoping-item1");
let body = document.querySelector("body");
let slider = document.querySelector(".slider");
let input = document.querySelector("input");
let value= true;
alert("you Enter in dark Mode")
alert="welcome"
.boxinput.onclick = () => {
    if (value === true){
       
        body.style.backgroundColor = "black";
        shoppingitem.style.backgroundColor = "black";
        value = false;
    }
    else {
        alert("you Enter in light mode")
        box.style.backgroundColor = "white"
        body.style.backgroundColor = "white"
        value = true;
    }
}
