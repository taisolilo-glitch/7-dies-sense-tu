let currentEnvelope = null;

const letters = {
1:{code:"MERCURI",title:"Primer dia",text:"Bona tarda (o nit) mi vida, potser això et sembla una mica extrany, però he decidit utilitzar els meus dotes de persona friki i crear-te una pàgina web pe[...]

2:{code:"SENDOKAI",title:"Segon dia",text:"Bon dia mi amor! com estas? Espero que la primera nit no hagi sigut molt dura, per a mi si que ho ha sigut perquè és dissabte i no m'he despertat amb tu. E[...]

3:{code:"DISASOCIAR",title:"Tercer dia",text:"Bon dia amor, com has dormit? Ja només queden 4 dies per a que tornis a casa, i no puc esperar a veure't. Espero que estiguis passant-ho súper bé (i qu[...]

4:{code:"PANCHIPANCHI",title:"Quart dia",text:"Hola panchi panchi, et trobo molt a faltar :((, és totalment inhumà no tenir-te aprop, i encara em queden tres dies per tornar a veure't. Espero que es[...]

5:{code:"THAISOLOLO",title:"Cinquè dia",text:"Bon dia mi vida, com va? Estic trista perquè és el primer dimarts en dos mesos que dinaré sola a casa meva perquè tu no estàs, torna ja porfa, desab[...]

6:{code:"XOXI",title:"Sisè dia",text:"Hola mi amor, en dos dies torno a tenir-te amb mi. Aquesta és la única carta que he fet a posteriori de crear la web perquè no vaig contar bé els dies (pensa[...]
    
7:{code:"TESTIMO",title:"Setè dia",text:"Queda un dia, un dia, UN DIA. Demà tornes, estic contenta, però seran les pitjors 24 hores de la meva vida. LELELE, com va tot? Quines ganes de que em truqu[...]

8:{code:"INFINIT",title:"Vuitè dia",text:"ES HOY! ES HOY! BIEN!BIEEN! Bon dia amor, per fi tornes, per fi et tindré aquí amb mi, és el dia més feliç de la meva vida (fins que ens casem). Quines [...]
};

function openEnvelope(num, el){

currentEnvelope = num;

// abrir modal SIEMPRE
const modal = document.getElementById("letterView");
if (modal) modal.style.display = "flex";
lockScroll();


// reset estado
const titleEl = document.getElementById("paperTitle");
if (titleEl) titleEl.innerText = letters[num].title;
const contentEl = document.getElementById("paperContent");
if (contentEl) contentEl.innerText = "";
const codeInputEl = document.getElementById("codeInput");
if (codeInputEl) codeInputEl.value = "";

// bloquear scroll
document.body.style.overflow = "hidden";

// animación sobre
if(el){
  el.classList.add("open");
}
}

function checkCode(){

const input = (document.getElementById("codeInput") || {}).value?.trim?.().toUpperCase?.();
const letter = letters[currentEnvelope];

if(!letter) return;

if(input !== letter.code){
  alert("Codi incorrecte 💔");
  return;
}

// desbloqueo correcto
const paperContent = document.getElementById("paperContent");
if (paperContent) paperContent.innerText = letter.text;
}

function closeLetter(){
  // restore scroll & hide modal
  unlockScroll();
  const modal = document.getElementById("letterView");
  if (modal) modal.style.display = "none";

  // clear modal state
  const paper = document.getElementById("paperContent");
  if (paper) paper.innerText = "";
  const codeInput = document.getElementById("codeInput");
  if (codeInput) codeInput.value = "";

  // remove any open class on envelopes so animation/state resets
  document.querySelectorAll('.envelope.open').forEach(el => el.classList.remove('open'));

  // restore page scroll if still locked
  document.body.style.overflow = "auto";

  currentEnvelope = null;
}

// Initialize UI behavior on DOM ready
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("letterView");

  // ensure modal is hidden on load and reset any pre-opened envelopes
  if (modal) {
    modal.style.display = "none";
  }
  // remove any envelope open states left in markup
  document.querySelectorAll('.envelope.open').forEach(el => el.classList.remove('open'));
  currentEnvelope = null;
  document.body.style.overflow = "auto";

  // close when clicking the overlay (but not when clicking inside modal content)
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeLetter();
    });

    const modalContent = modal.querySelector('.modal-content') || modal.querySelector('.content') || modal.querySelector('.paper');
    if (modalContent) {
      modalContent.addEventListener('click', function (e) { e.stopPropagation(); });
    }
  }

  // Delegated listener: close when clicking any element that is or is inside a close control.
  // This handles nested elements like SVG <path> inside the button and different button types.
  document.addEventListener('click', function (e) {
    const closeBtn = e.target.closest('[data-close], .close, .close-btn, [aria-label="close"], #closeLetterBtn, #closeBtn');
    if (closeBtn) {
      // Prevent accidental navigation if the close control is a link
      if (closeBtn.tagName === 'A') e.preventDefault();
      closeLetter();
    }
  });

  // Allow Escape key to close the modal
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') closeLetter();
  });

  function updateCountdown(){
    // countdown target (local time)
    const targetDate = new Date("2026-08-27T18:00:00");
    const now = new Date();
    const diff = targetDate - now;
    const el = document.getElementById("countdown");
    if(!el) return;
    if(diff <= 0){ el.innerHTML = "Ja ha arribat ✨"; return; }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    el.innerHTML = `Falten <b>${days}d ${hours}h ${minutes}m ${seconds}s</b>`;
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
