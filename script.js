let currentEnvelope = null;

const letters = {
1:{code:"MERCURI",title:"Primer dia",text:"Bona tarda (o nit) mi vida, potser això et sembla una mica extrany, però he decidit utilitzar els meus dotes de persona friki i crear-te una pàgina web[...]

2:{code:"SENDOKAI",title:"Segon dia",text:"Bon dia mi amor! com estas? Espero que la primera nit no hagi sigut molt dura, per a mi si que ho ha sigut perquè és dissabte i no m'he despertat amb tu[...]

3:{code:"DISASOCIAR",title:"Tercer dia",text:"Bon dia amor, com has dormit? Ja només queden 4 dies per a que tornis a casa, i no puc esperar a veure't. Espero que estiguis passant-ho súper bé (i[...]

4:{code:"PANCHIPANCHI",title:"Quart dia",text:"Hola panchi panchi, et trobo molt a faltar :((, és totalment inhumà no tenir-te aprop, i encara em queden tres dies per tornar a veure't. Espero qu[...]

5:{code:"THAISOLOLO",title:"Cinquè dia",text:"Bon dia mi vida, com va? Estic trista perquè és el primer dimarts en dos mesos que dinaré sola a casa meva perquè tu no estàs, torna ja porfa, d[...]

6:{code:"XOXI",title:"Sisè dia",text:"Hola mi amor, en dos dies torno a tenir-te amb mi. Aquesta és la única carta que he fet a posteriori de crear la web perquè no vaig contar bé els dies (p[...]
    
7:{code:"TESTIMO",title:"Setè dia",text:"Queda un dia, un dia, UN DIA. Demà tornes, estic contenta, però seran les pitjors 24 hores de la meva vida. LELELE, com va tot? Quines ganes de que em t[...]

8:{code:"INFINIT",title:"Vuitè dia",text:"ES HOY! ES HOY! BIEN!BIEEN! Bon dia amor, per fi tornes, per fi et tindré aquí amb mi, és el dia més feliç de la meva vida (fins que ens casem). Qui[...]
};

function openEnvelope(num, el){

currentEnvelope = num;

// abrir modal SIEMPRE
const modal = document.getElementById("letterView");
modal.style.display = "flex";
  lockScroll();


// reset estado
document.getElementById("paperTitle").innerText = letters[num].title;
document.getElementById("paperContent").innerText = "";
document.getElementById("codeInput").value = "";

// bloquear scroll
document.body.style.overflow = "hidden";

// animación sobre
if(el){
el.classList.add("open");
}
}

function checkCode(){

const input = document.getElementById("codeInput").value.trim().toUpperCase();
const letter = letters[currentEnvelope];

if(!letter) return;

if(input !== letter.code){
alert("Codi incorrecte 💔");
return;
}

// desbloqueo correcto
document.getElementById("paperContent").innerText = letter.text;
}

function closeLetter(){
unlockScroll();
  
document.getElementById("letterView").style.display = "none";

// restaurar scroll
document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", function () {

function updateCountdown(){

const targetDate = new Date("2026-08-27T18:00:00");
const now = new Date();

const diff = targetDate - now;

const el = document.getElementById("countdown");

if(!el) return;

if(diff <= 0){
el.innerHTML = "Ja ha arribat ✨";
return;
}

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((diff / (1000 * 60)) % 60);
const seconds = Math.floor((diff / 1000) % 60);

el.innerHTML =
`Falten <b>${days}d ${hours}h ${minutes}m ${seconds}s</b>`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

});


function lockScroll(){
document.body.style.overflow = "hidden";
}

function unlockScroll(){
document.body.style.overflow = "auto";
}
