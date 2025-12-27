function load(){
  document.getElementById("avvio").parentNode.removeChild(document.getElementById("avvio"))
  audio = new Audio('./textures!!1!1!!/Index.opus ');
  audio.loop = true;
  audio.play();
  setTimeout(function() {
    var elements = ["uvvu","menu","istruzioni","titolo","titolo2"];
    for (var i = 0; i < elements.length; i++) {
      fadeIn(document.getElementById(elements[i]));}}, 4000); 
  document.getElementById("istruzioni").addEventListener("click",istruzioni)
    var r = 255;
    var g = 0;
    var b = 0;
    var step = 1;
    setInterval(function() {
      if (g < 255 && r == 255 && b == 0) {g += step;} else if (g == 255 && r > 0 && b == 0) {r -= step;} else if (g == 255 && r == 0 && b < 255) {b += step;} else if (g > 0 && r == 0 && b == 255) {g -= step;} else if (g == 0 && r < 255 && b == 255) {r += step;} else if (g == 0 && r == 255 && b > 0) {b -= step;}
      document.getElementById("nuovo").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";document.getElementById("nuovo2").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";document.getElementById("nuovo3").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  },2);}
function fadeIn(element) {
  var op = 0.1;  // initial opacity
  element.style.display = 'block';
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);}
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 50);}
function istruzioni(){
  document.getElementById("istruzioni").removeEventListener("click",istruzioni)
  document.getElementById("istruzioni").textContent="Istruzioni \n (sotto)"
  el=document.createElement("DIV")
  el.textContent="Movimento: WASD per muovere il personaggio \n\n Cattura il libro: ti puoi muovere solo su una linea con W e S ed il tuo obiettivo è quello di prendere i libri, altrimenti perdi. \n\n Trova il libro: Il libro appare in una casella casuale per una frazione di secondo e poi scompare, vai sulla casella dov'e scomparso il libro prima che il timer termini, altrimenti perdi.\n\n Scappa dal libro: l'esatto opposto di 'cattura il libro' (se prendi il libro perdi)\n\nBassi bossfight: Muoviti nella riga come le altre modalità, schivando i libri lanciati dalla Bassi. Per sconfiggere la Bassi, premere SPAZIO quando è nella stessa riga per farle perdere 1 punto vita (ne ha 25 in totale, quando arriva a 0 si vince la partita)\nSchivando i suoi attacchi perde un punto vita (le vengono i brufoli)"
  el.id="istruzionilore"
  el.style="margin-left:25%;width:700px;height:500px;background-color:rgb(175, 85, 85)  ;font-size:150%;margin-top:165px;white-space:pre-line;"
  el.addEventListener("click",load)
  document.body.appendChild(el);}
function lessgo(){
  elementi=["uvvu","menu","istruzioni","titolo","titolo2"]
  for (let index = 0; index < elementi.length; index++) {
    el=document.getElementById(elementi[index])
    el.style.opacity = 0;}
  el=document.createElement("DIV")
  el.textContent="AVVIA"
  el.id="avvio"
  el.style="margin-left:45%;width:100px;background-color:red;font-size:150%;margin-top:-200px"
  el.addEventListener("click",load)
  document.body.appendChild(el);}
document.addEventListener("DOMContentLoaded", lessgo)