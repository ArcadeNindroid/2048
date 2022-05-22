"use strict"

var high_score = 0
var nbr_undo = 0
var bg_color = 0
var refresh = 0
var tuiles = []
var start = 1
// var music = new Audio("audio/music.wav")
// var slide = new Audio("audio/slide.wav")

//Défénir l'espace de jeu
var canvas = document.getElementById("canvas1")
//Obtenir un contexte de deux dimensions pour dessiner
var c = canvas.getContext("2d")

{//text start
c.font = "15px arial"
c.fillStyle = "black"
var txt = "Peser sur une des flèches ← ↑ → ↓"
c.fillText(txt, (canvas.width/2) - (c.measureText(txt).width/2), canvas.height/2)
}

const restart = function() {
  refresh++
  tuiles = []
  x = [
    gapx,2*gapx + wide, 3*gapx + 2*wide, 4*gapx + 3*wide, gapx, 2*gapx + wide, 3*gapx + 2*wide,4*gapx + 3*wide, gapx,2*gapx + wide, 3*gapx + 2*wide, 4*gapx + 3*wide, gapx,2*gapx + wide, 3*gapx + 2*wide, 4*gapx + 3*wide ]
  y = [
    gapy, gapy, gapy, gapy, 2*gapy + high, 2*gapy + high, 2*gapy + high, 2*gapy + high, 3*gapy + 2*high, 3*gapy + 2*high, 3*gapy + 2*high, 3*gapy + 2*high, 4*gapy + 3*high, 4*gapy + 3*high, 4*gapy + 3*high, 4*gapy + 3*high,]
  start = 0
}

const bg_change = function() {
  console.log(refresh)
  if (start < 1 || refresh > 1) {
    start_no()
  }
  else {
    start_yes()
  }
}

const start_no = function() {
    if (bg_color === 0) {
    document.body.style.backgroundColor = "#30241c";
    document.getElementById("titre").style.color = "gray";
    document.getElementById("credits").style.color = "gray";
    document.getElementById("menu").style.color = "gray";
    document.getElementById("undo").style.color = "gray";
    document.getElementById("restart").style.color = "gray";
    document.getElementById("bg_color").style.color = "gray";
    document.getElementById("p1").style.color = "gray";
    document.getElementById("p2").style.color = "gray";
    bg_color = 1
    document.getElementById("bg_color").innerHTML = "Light mode"
    c.clearRect(0,0,canvas.width, canvas.height);
    c.font = "15px arial"
    c.fillStyle = "gray"
    var txt = "Peser sur une des flèches ← ↑ → ↓"
    c.fillText("Peser sur une des flèches ← ↑ → ↓", (canvas.width/2) - (c.measureText(txt).width/2), canvas.height/2)
  }
    else if (bg_color === 1) {
    document.body.style.backgroundColor = "#907c64";
    document.getElementById("titre").style.color = "white";
    document.getElementById("credits").style.color = "white";
    document.getElementById("menu").style.color = "white";
    document.getElementById("undo").style.color = "white";
    document.getElementById("restart").style.color = "white";
    document.getElementById("bg_color").style.color = "white";
    document.getElementById("p1").style.color = "white";
    document.getElementById("p2").style.color = "white";
    bg_color = 0
    document.getElementById("bg_color").innerHTML = "Dark mode"
    c.clearRect(0,0,canvas.width, canvas.height);
    c.font = "15px arial"
    c.fillStyle = "black"
    var txt = "Peser sur une des flèches ← ↑ → ↓"
    c.fillText("Peser sur une des flèches ← ↑ → ↓", (canvas.width/2) - (c.measureText(txt).width/2), canvas.height/2)

    }
}

const start_yes = function() {
    if (bg_color === 0) {
    document.body.style.backgroundColor = "#30241c";
    document.getElementById("titre").style.color = "gray";
    document.getElementById("credits").style.color = "gray";
    document.getElementById("menu").style.color = "gray";
    document.getElementById("undo").style.color = "gray";
    document.getElementById("restart").style.color = "gray";
    document.getElementById("bg_color").style.color = "gray";
    document.getElementById("p1").style.color = "gray";
    document.getElementById("p2").style.color = "gray";
    bg_color = 1
    document.getElementById("bg_color").innerHTML = "Light mode"
    c.fillStyle = "gray"
  }
    else if (bg_color === 1) {
    document.body.style.backgroundColor = "#907c64";
    document.getElementById("titre").style.color = "white";
    document.getElementById("credits").style.color = "white";
    document.getElementById("menu").style.color = "white";
    document.getElementById("undo").style.color = "white";
    document.getElementById("restart").style.color = "white";
    document.getElementById("bg_color").style.color = "white";
    document.getElementById("p1").style.color = "white";
    document.getElementById("p2").style.color = "white";
    bg_color = 0
    document.getElementById("bg_color").innerHTML = "Dark mode"
    c.fillStyle = "black"
    }
}

document.onkeydown = function (event) {
    switch (event.keyCode) {
         case 37:
            c.clearRect(0,0,canvas.width, canvas.height);
            console.log("Left key is pressed.");
            left();
            break;
         case 38:
            c.clearRect(0,0,canvas.width, canvas.height);
            console.log("Up key is pressed.");
            up();
            break;
         case 39:
            c.clearRect(0,0,canvas.width, canvas.height);
            console.log("Right key is pressed.");
            right();
            break;
         case 40:
            c.clearRect(0,0,canvas.width, canvas.height);
            console.log("Down key is pressed.");
            down();
            break;
    }
   }

const entierAleatoire = function(max) {
   //t1 sera un nombre réel inclus dans l'intervalle [0, 1[
   var t1 = Math.random() //https://www.w3schools.com/js/js_random.asp
   //t2 sera un nombre réel inclus dans l'intervalle [0, max[
   var t2 = t1 * max
   //entier sera un nombre entier inclus dans l'ensemble {0, 1, ..., max-1}
   var entier = Math.floor(t2) //https://www.w3schools.com/jsref/jsref_floor.asp
   //Afficher les variable à la console pour mieux comprendre
   //console.log("t1", t1, "t2", t2, "entier", entier)

   return entier
}

{// tuiles(x, y, l, h,couleur)
var tuilex = 0
var tuiley = 0
var gapx = 7
var gapy = 3
var wide = 66
var high = 67/2
var x = [
  gapx,2*gapx + wide, 3*gapx + 2*wide, 4*gapx + 3*wide, gapx, 2*gapx + wide, 3*gapx + 2*wide,4*gapx + 3*wide, gapx,2*gapx + wide, 3*gapx + 2*wide, 4*gapx + 3*wide, gapx,2*gapx + wide, 3*gapx + 2*wide, 4*gapx + 3*wide ]
var y = [
  gapy, gapy, gapy, gapy, 2*gapy + high, 2*gapy + high, 2*gapy + high, 2*gapy + high, 3*gapy + 2*high, 3*gapy + 2*high, 3*gapy + 2*high, 3*gapy + 2*high, 4*gapy + 3*high, 4*gapy + 3*high, 4*gapy + 3*high, 4*gapy + 3*high,]
}
const generate = function(){
  c.clearRect(0,0,canvas.width, canvas.height)
  requestAnimationFrame(generate)
  for (let i = 0; i < tuiles.length; i++ ) {
    let tuile = tuiles[i]
    tuile.generate()
    // console.log(x, y)
  }
  if(start == 0){
  c.font = "15px arial"
  c.fillStyle = "black"
  var txt = "Peser sur une des flèches ← ↑ → ↓"
  c.fillText(txt, (canvas.width/2) - (c.measureText(txt).width/2), canvas.height/2)
  }
}

const spawn = function(){
  let i = entierAleatoire(x.length-1)
    tuilex = x[i]
    tuiley = y[i]
    tuiles.push(new Tuile(tuilex, tuiley, wide, high, "#EEE4DA"))
    x.splice(i, 1)
    y.splice(i, 1)
//in combine function put tuile.x and .y back in the array
}

const left = function() {
    refresh--
    start++
    spawn()
    generate()
    console.log("left")
   }

const up = function() {
  refresh--
  start++
  spawn()
  generate()
  console.log("up")
}

const right = function() {
  refresh--
  start++
  spawn()
  generate()
  console.log("right")
}

const down = function() {
  refresh--
  start++
  spawn()
  generate()
  console.log("down")
}
