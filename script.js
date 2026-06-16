let currentEnvelope = null;

const letters = {
1:{code:"MERCURI",title:"Primer dia",text:"Bona tarda (o nit) mi vida, potser això et sembla una mica extrany, però he decidit utilitzar els meus dotes de persona friki i crear-te una pàgina web per a que cada dia puguis obrir una carta sense haver-les de portar a sobre (que amb la maleta que portes segur que t'hi haguessin capigut, però preferia no arriscar-me). Et trobo moltíssim a faltar ja, necessito que m'abracis i que dormis al meu costat, però sé que aquests dies seràs molt feliç i no hi ha res que vulgui més en aquest món, jo t'espero aquí amb els braços oberts per quan tornis. Espero que et faci la mateixa il·lusió rebre això de la que m'ha fet a mi fer-ho. T'estimo d'aqui a mercuri (i infinit). Gaudeix amor."},

2:{code:"SENDOKAI",title:"Segon dia",text:"Bon dia mi amor! com estas? Espero que la primera nit no hagi sigut molt dura, per a mi si que ho ha sigut perquè és dissabte i no m'he despertat amb tu. Espero que tinguis ganes i energia per a enfrontar el dia que t'espera, que segur que és xulíssim. Estic tota l'estona pensant en tu. T'adoro amb tot el meu cor. Passat-ho super bé, ets la millor coach del mon ;)."},

3:{code:"DISASOCIAR",title:"Tercer dia",text:"Bon dia amor, com has dormit? Ja només queden 4 dies per a que tornis a casa, i no puc esperar a veure't. Espero que estiguis passant-ho súper bé (i que em trobis molt a faltar). Jo no sé, ni vull, estar sense tu, torna ja porfi :(, la vida no és el mateix sense tu. T'estimo, t'estimo i t'estimo."},

4:{code:"PANCHIPANCHI",title:"Quart dia",text:"Hola panchi panchi, et trobo molt a faltar :((, és totalment inhumà no tenir-te aprop, i encara em queden tres dies per tornar a veure't. Espero que estiguis preparada perquè quan tornis no penso deixar-te anar, viure'm abraçades mínim una setmana, fins que recuperi tot el temps que hem perdut juntes (és broma, no és perdut, és diferent). Qui em diria a mi que podia senti-me així? amb lo independent que acostumo a ser... Bueno, passat-ho súper bé amor, vull que tornis ja però sobretot vull que siguis feliç, tindrem temps de sobres (una vida sencera, o totes les que vulguis) per a estar juntes i estimar-nos com sabem. Mua, te amo way"},

5:{code:"THAISOLOLO",title:"Cinquè dia",text:"Bon dia mi vida, com va? Estic trista perquè és el primer dimarts en dos mesos que dinaré sola a casa meva perquè tu no estàs, torna ja porfa, desabandonam :(. Espero que estiguis passant-ho súper bé, tot i que sigui sense mi :( (és broma), gaudeix moltíssim del dia i del que et queda i en res estarem juntes un altre cop. Recorda que és la millor setmana de l'any ;). T'estimo moltíssim, i no puc esperar a veure't. Mua mua mua."},

6:{code:"TESTIMO",title:"Sisè dia",text:"Queda un dia, un dia, UN DIA. Demà tornes, estic contenta, però seran les pitjors 24 hores de la meva vida. LELELE, com va tot? Quines ganes de que em truquis i m'expliquis, ets l'amor de la meva vida sencera, i de totes les que tingui. Vull casar-me amb tu ja i així no m'abandones més. Espero que estiguis passant-ho súper bé, i que et trobis molt a faltar, perquè jo et trobo moltíssim a faltar. T'estimo infinitament, i no puc esperar a veure't demà. Mercuri, mercuri, mercuri."},

7:{code:"INFINIT",title:"Setè dia",text:"ES HOY! ES HOY! BIEN!BIEEN! Bon dia amor, per fi tornes, per fi et tindré aquí amb mi, és el dia més feliç de la meva vida (fins que ens casem). Quines ganes de veure't joder, em puto moro per omplir-te de petons, espero que et passi el mateix, tot i que t'ho estiguis passant super be. Acaba de passar un bon dia perquè penso secuestrar-te durant tant de temps! T'estimo."}
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

const targetDate = new Date("2026-06-26T18:00:00");
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
