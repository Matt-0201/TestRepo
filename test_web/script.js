if (localStorage.getItem("nb") === null) {
    localStorage.setItem("nb",0);
    localStorage.setItem("up",1);
    localStorage.setItem("idle",0);
}

if (localStorage.getItem("idle") === 1) {
    Idle();
}

function Idle (){
    setInterval(GainPassif, 1000);
}
// Récupération des variables
var nb = parseInt(localStorage.getItem("nb"));
var up = parseInt(localStorage.getItem("up"));
var idle = parseInt(localStorage.getItem("idle"));
var txt = document.getElementById("nb");

// Initialisation
txt.innerHTML = "Nombre: " + nb +" Puissance de click: "+ up;

function bouton_1(){
    nb+=up;
    localStorage.setItem("nb",nb);
    console.log(nb);
    var txt = document.getElementById("nb");
    txt.innerHTML = "Nombre: " + nb +" Puissance de click: "+ up;
}

function bouton_up1(){
    if (nb >= 10){
        up+=1;
        nb-=10;
        console.log(nb);
        console.log("up"+up);
        localStorage.setItem("up",up);
        localStorage.setItem("nb",nb);
        txt.innerHTML = "Nombre: " + nb +" Puissance de click: "+ up;
    }
}

function UnlockIdle() {
    idle = 1;
}

function GainPassif(){
    nb+=1;
    localStorage.setItem("nb",nb);
    txt.innerHTML = "Nombre: " + nb +" Puissance de click: "+ up;
}

function reset() {
    nb=0;
    up=1;
    idle = 0;
    localStorage.setItem("nb",0);
    localStorage.setItem("up",1);
    localStorage.setItem("idle",0);
    console.log("idle")
    txt.innerHTML = "Nombre: " + nb +" Puissance de click: "+ up;
}
