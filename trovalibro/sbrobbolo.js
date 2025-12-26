var pos=1
var poslibro=0
console.log("ciao")
function KeyPress(event) {
    if (event.keyCode == 87) {//W
        if(document.getElementById("d"+ (pos-11))){document.getElementById("d"+pos).style.backgroundImage="url('../textures!!1!1!!/vuoto.png')";pos=pos-11;document.getElementById("d"+pos).style.backgroundImage="url('../textures!!1!1!!/skull.png')";}}
    if (event.keyCode == 83) {//S
        if(document.getElementById("d"+ (pos+11))){document.getElementById("d"+pos).style.backgroundImage="url('../textures!!1!1!!/vuoto.png')";pos=pos+11;document.getElementById("d"+pos).style.backgroundImage="url('../textures!!1!1!!/skull.png')";}}
    if (event.keyCode == 65) {//A
        if(document.getElementById("d"+ (pos-1))){document.getElementById("d"+pos).style.backgroundImage="url('../textures!!1!1!!/vuoto.png')";pos=pos-1;document.getElementById("d"+pos).style.backgroundImage="url('../textures!!1!1!!/skull.png')";}}
    if (event.keyCode == 68) {//D
        if(document.getElementById("d"+ (pos+1))){document.getElementById("d"+pos).style.backgroundImage="url('../textures!!1!1!!/vuoto.png')";pos=pos+1;document.getElementById("d"+pos).style.backgroundImage="url('../textures!!1!1!!/skull.png')";}}}
function gameover() {
    document.removeEventListener("keydown",KeyPress)
    var sezioni = document.getElementsByTagName("section");
    for (var i = 0; i < sezioni.length; i++) {
    sezioni[i].parentNode.removeChild(sezioni[i]);}
    document.getElementById("s2").parentNode.removeChild(document.getElementById("s2"))
    document.getElementById("s4").parentNode.removeChild(document.getElementById("s4"))
    let nuovoElemento = document.createElement("div");
    nuovoElemento.id="over"
    nuovoElemento.addEventListener("click",reload)
    const randomNum = Math.floor(Math.random() * 3) + 1;
    audio = new Audio('../textures!!1!1!!/scheletro'+randomNum+'.opus');
    audio.loop = true;
    audio.play();//funziona solo se l'utente ha mosso il teschio almeno una volta (google policies lore)
    document.body.appendChild(nuovoElemento);}
function start(){
    let qwerty=4
    poslibro=Math.floor(Math.random() * 50) + 1;
    if(poslibro==pos){poslibro++}
    document.getElementById("d"+poslibro).style.backgroundImage="url('../textures!!1!1!!/libro.png')";
    setTimeout(function () {
        document.getElementById("d"+poslibro).style.backgroundImage="url('../textures!!1!1!!/vuoto.png')";
        document.addEventListener("keydown",KeyPress)
    }, 1000)
    if(parseInt( document.getElementById("punteggio").textContent)==10){querty=3}
    for (let i = 0; i < qwerty; i++) {
    setTimeout(function() {
        document.getElementById("timer").textContent=i
        if(i==0){
            document.removeEventListener("keydown",KeyPress)
            if(poslibro==pos){
                document.getElementById("timer").textContent=3
                document.getElementById("punteggio").textContent=parseInt( document.getElementById("punteggio").textContent)+1
                start()
            }
            else{
                gameover()
            }
        }
    }, (3 - i) * 1000);}
}
function reload(){location.reload();}
//document.addEventListener("keydown",KeyPress)
document.addEventListener("DOMContentLoaded",start)


