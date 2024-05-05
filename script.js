const button = document.querySelector(".logo");
const topNav = document.querySelector(".topNav");
const gitLink = document.querySelector(".gitLink");
const jsP = document.querySelector(".jsP");
const p1 = document.querySelector(".p1");

let isLightMode = true;

const toggleMode = function(){
    if(isLightMode){
        dark();
    } else {
        light();
    }
    isLightMode = !isLightMode
}

const light = function(){
    p1.style.color = "rgba(0, 0, 0, 0.552)";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    topNav.style.backgroundColor = "#f4f4f4";
    gitLink.style.color = "black";
    button.style.color = "black";
    gitLink.addEventListener("mouseover",function(){
        gitLink.style.backgroundColor = "white";
    })
    gitLink.addEventListener("mouseout",function(){
        gitLink.style.backgroundColor ="";
    })
    jsP.style.color = "black";
    jsP.addEventListener("mouseover",function(){
        jsP.style.backgroundColor = "white";
    })
    jsP.addEventListener("mouseout", function(){
        jsP.style.backgroundColor = "";
    })

}
const dark = function(){
    p1.style.color ="rgba(255, 255, 255, 0.476)";
    button.style.color = "white";
    gitLink.style.color = "white";
    jsP.style.color = "white"
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "white";
    topNav.style.backgroundColor = "#090909";
    gitLink.addEventListener("mouseover",function(){
        gitLink.style.backgroundColor = "#222222";
    })
    gitLink.addEventListener("mouseout",function(){
        gitLink.style.backgroundColor ="";
    })
    jsP.addEventListener("mouseover",function(){
        jsP.style.backgroundColor = "#222222";
    })
    jsP.addEventListener("mouseout", function(){
        jsP.style.backgroundColor = "";
    })
}



button.addEventListener("click",toggleMode);