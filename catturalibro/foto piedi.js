var pos=1
var intervallo
console.log("ciao")
function KeyPress(event) {
    if (event.keyCode == 87) {//W
        console.log(pos +"1");
        if(document.getElementById(pos-1 +"1")){
            console.log("spostato");
            document.getElementById(pos-1+"1").style.backgroundImage="url('../textures!!1!1!!/skull.png')";
            document.getElementById(pos+"1").style.backgroundImage="url('../textures!!1!1!!/vuoto.png')";
            pos--
            console.log(pos);
        }
    }
    if (event.keyCode == 83) {//S
        console.log(document.getElementById(pos+1+"1"))
        console.log(pos+1+"1")
        console.log(document.getElementById(pos+"1"))
        if(document.getElementById(pos+1+"1")){
            console.log("spostato (2)")
            document.getElementById(pos+1+"1").style.backgroundImage="url('../textures!!1!1!!/skull.png')";
            document.getElementById(pos+"1").style.backgroundImage="url('../textures!!1!1!!/vuoto.png')"
            pos++
            console.log(pos)}}}
function start(){
    intervallo=setInterval(generalibro, 800)
}
function generalibro(){
    poslibro=Math.floor(Math.random() * 5) + 1;
    console.log(poslibro)
    document.getElementById(poslibro+"11").style.backgroundImage="url('../textures!!1!1!!/libro.png')";
    for (let i = 10; i >= 1; i--) {
        setTimeout(function() {
        //scrivi la shit qui sotto
        if(i==1){
            if (pos==poslibro) {
                document.getElementById(poslibro+(""+i)).style.backgroundImage="url('../textures!!1!1!!/libro.png')"
                document.getElementById(poslibro+(""+(i+1))).style.backgroundImage="url('../textures!!1!1!!/vuoto.png')"
                console.log(document.getElementById(poslibro+(""+i)).style.backgroundImage)
                document.getElementById(poslibro+(""+i)).style.backgroundImage="url('../textures!!1!1!!/skull.png')"
                console.log("skull")
                document.getElementById("punteggio").textContent= parseInt(document.getElementById("punteggio").textContent)+1
            }
            else{
                gameover()
                console.log("hell naw")}}
        else{
            document.getElementById(poslibro+(""+i)).style.backgroundImage="url('../textures!!1!1!!/libro.png')"
            document.getElementById(poslibro+(""+(i+1))).style.backgroundImage="url('../textures!!1!1!!/vuoto.png')"
        }
        //scrivi la shit sopra
        }, (10 - i) * 80);}}
function gameover() {
    clearInterval(intervallo)
    document.removeEventListener("keydown",KeyPress)
    var sezioni = document.getElementsByTagName("section");
    for (var i = 0; i < sezioni.length; i++) {
    sezioni[i].parentNode.removeChild(sezioni[i]);
    }
    document.getElementById("s2").parentNode.removeChild(document.getElementById("s2"))
    document.getElementById("s4").parentNode.removeChild(document.getElementById("s4"))
    let nuovoElemento = document.createElement("div");
    nuovoElemento.id="over"
    nuovoElemento.addEventListener("click",reload)
    const randomNum = Math.floor(Math.random() * 3) + 1;
    audio = new Audio('../textures!!1!1!!/scheletro'+randomNum+'.opus');
    audio.loop = true;
    audio.play();//funziona solo se l'utente ha mosso il teschio almeno una volta (google policies lore)
    document.body.appendChild(nuovoElemento);
}
function reload(){
    location.reload();}
document.addEventListener("keydown",KeyPress)
document.addEventListener("DOMContentLoaded",start)