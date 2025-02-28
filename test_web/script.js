var nb = parseInt(localStorage.getItem("nb"));
var txt = document.getElementById("nb");
txt.innerHTML = "Nombre: " + nb;

if (localStorage.getItem("nb") === null) {
    localStorage.setItem("nb",0);
}

var txt = document.getElementById("nb");
txt.innerHTML = "Nombre: " + nb;

function bouton_1(){
    var nb = parseInt(localStorage.getItem("nb"));
    nb+=1;
    localStorage.setItem("nb",nb);
    console.log(nb);
    var txt = document.getElementById("nb");
    txt.innerHTML = "Nombre: " + nb;
}

function reset() {
    var nb = parseInt(localStorage.getItem("nb"));
    nb=0;
    console.log(nb);
    localStorage.setItem("nb",nb);
    txt.innerHTML = "Nombre: " + nb;
}