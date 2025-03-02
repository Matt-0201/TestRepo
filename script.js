// For a new player 
if (localStorage.getItem("points") === null) {
    localStorage.setItem("points",0);
    localStorage.setItem("level_click",1);
    localStorage.setItem("cost_up1",50);
    localStorage.setItem("idle",0);
    localStorage.setItem("level_idle",1);
    localStorage.setItem("cost_idle",100);
}

// variables
let player = {
    points: parseInt(localStorage.getItem("points")),
    txt_points: document.getElementById("points"),
    txt_cost_1: document.getElementById("cost_up1"),
    txt_cost_idle: document.getElementById("cost_idle"),
};

let up_click = {
    level: parseInt(localStorage.getItem("level_click")),
    cost: parseInt(localStorage.getItem("cost_up1")),
};

let up_idle = {
    idle: parseInt(localStorage.getItem("idle")),
    level: parseInt(localStorage.getItem("level_idle")),
    cost: parseInt(localStorage.getItem("cost_idle")),
};

// if idle unlocked, idle start
if (up_idle.idle != 0) {
    Idle();
}

// Initialisation
player.txt_points.innerHTML = "Points: " + Math.round(player.points) +"<br>Puissance de click: "+ Math.round(up_click.level);
player.txt_cost_1.innerHTML = "Cost: "+ Math.round(up_click.cost);
player.txt_cost_idle.innerHTML = "Cost: " + Math.round(up_idle.cost); 

function bouton_1(){
    player.points += up_click.level;
    localStorage.setItem("points",player.points);
    player.txt_points.innerHTML = "Points: " + Math.round(player.points) +"<br>Puissance de click: "+ Math.round(up_click.level);
}

function bouton_up1(){
    if (player.points >= up_click.cost){
        up_click.level+=1;
        player.points-=up_click.cost;
        up_click.cost+=2*(up_click.cost);
        localStorage.setItem("level_click",up_click.level);
        localStorage.setItem("points",player.points);
        localStorage.setItem("cost_up1",up_click.cost);
        player.txt_points.innerHTML = "Points: " + Math.round(player.points) +"<br>Puissance de click: "+ Math.round(up_click.level);
        player.txt_cost_1.innerHTML = "Cost: "+ Math.round(up_click.cost);
    }
}

function UnlockIdle() {
    up_idle.idle++;
    localStorage.setItem("idle",up_idle.idle);
    if (player.points >= up_idle.cost) {
        up_idle.level+=1;
        player.points-=up_idle.cost;
        up_idle.cost+=4*up_idle.cost;
        localStorage.setItem("level_idle",up_idle.level);
        localStorage.setItem("points",player.points);
        localStorage.setItem("cost_idle",up_idle.cost);
        player.txt_points.innerHTML = "Points: " + Math.round(player.points) +"<br>Puissance de click: "+ Math.round(up_click.level);
        player.txt_cost_idle.innerHTML = "Cost: " + Math.round(up_idle.cost); 
    }
    //if it's the first time idle is bought, it unlocks it
    if (up_idle.idle === 1) {
        Idle();
    }
}

function Idle() {
    intervalId = setInterval(GainPassif,1000);
}

function GainPassif(){
    if (up_click.idle === 0) {
        clearInterval(intervalId);
    }
    player.points+=up_idle.level;
    localStorage.setItem("points",player.points);
    player.txt_points.innerHTML = "Points: " + Math.round(player.points) +"<br>Puissance de click: "+ Math.round(up_click.level);
}

function reset() {
    player.points=0;
    up_click.level=1;
    up_click.cost=50;
    up_idle.idle = 0;
    up_idle.cost = 100;
    up_idle.level = 0;
    if (!Idle) {
        clearInterval(intervalId);
    }
    localStorage.setItem("points",0);
    localStorage.setItem("level_click",1);
    localStorage.setItem("cost_up1",50);
    localStorage.setItem("idle",0);
    localStorage.setItem("cost_idle",100);
    localStorage.setItem("level_idle",0);
    player.txt_points.innerHTML = "Points: " + Math.round(player.points) +"<br>Puissance de click: "+ Math.round(up_click.level);
    player.txt_cost_1.innerHTML = "Cost: "+ Math.round(up_click.cost);
    player.txt_cost_idle.innerHTML = "Cost: " + Math.round(up_idle.cost); 
}
