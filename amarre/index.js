function moverPositionRandom(elem) {
    elem.style.position ='absolute';
    elem.style.top = Math.random() * (window.innerHeight - elem.offsetHeight) + 'px';
    elem.style.left = Math.random() * (window.innerWidth - elem.offsetWidth) + 'px';
};

let btnS = document.getElementById("btnS");
let btnN = document.getElementById("btnN");
let sectionModoSexo = document.getElementsByClassName("modo_sex")[0];

btnN.addEventListener('mouseenter', function(e) {moverPositionRandom(e.target)});

btnS.addEventListener('click', function(e){
    alert("Sabia que dirias que SI. Casemonos y tengamos hijos. TE AMO!!!")
    sectionModoSexo.style.display = 'block';
    const cancion = new Audio('./Media\\modo_hot.mp3');
    cancion.play();
});

sectionModoSexo.addEventListener ('click', function(e) {
    const img = document.createElement("img");
    img.src = "./Media/patricio.jpg";
    console.log(img);
    sectionModoSexo.appendChild(img);
});