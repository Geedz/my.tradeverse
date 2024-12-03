answers = {
  "1.": "TradeVerse è un'academy di trading progettata per fornire corsi di alta qualità, servizi di copy trading (SyncVerse), e risorse per supportare i trader di ogni livello nella loro crescita personale e professionale.",
  "2.": "SyncVerse consente agli utenti di copiare automaticamente le operazioni di trader esperti. Basta collegarsi al servizio, scegliere il trader da seguire, e le operazioni verranno replicate sul tuo account.",
  "3.": "Puoi invitare amici e altri trader a iscriversi a TradeVerse. Ogni nuovo utente che si registra attraverso il tuo referral link ti permette di guadagnare una percentuale sulle loro spese.",
  "4.": "I rank in TradeVerse riflettono i tuoi progressi e risultati. Ogni rank viene assegnato al raggiungimento di obiettivi specifici, come il completamento di corsi o risultati positivi su SyncVerse",
  "5.": "Puoi accedere alla nostra sezione Supporto per contattare il nostro team, consultare le FAQ, o ricevere assistenza tramite live chat direttamente da WhatsApp",
  "6.": "Il trading comporta sempre rischi. Anche con il copy trading, i risultati non sono garantiti e potrebbero esserci perdite. Raccomandiamo di utilizzare sempre una gestione del rischio adeguata.",
  "7.": "Sì, puoi annullare il tuo abbonamento in qualsiasi momento accedendo alla sezione Impostazioni Account. Assicurati di verificare i termini del tuo piano prima di farlo.",
  "8.": "No, tutti i costi sono trasparenti e chiaramente indicati nella sezione Prezzi. Non ci sono costi nascosti o imprevisti.",
  "9.": "Offriamo supporto via email, live chat e una sezione FAQ dettagliata. Puoi contattare il nostro team direttamente dalla tua area personale per risolvere qualsiasi problema."
};

const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const q5 = document.getElementById("q5");
const q6 = document.getElementById("q6");
const q7 = document.getElementById("q7");
const q8 = document.getElementById("q8");
const q9 = document.getElementById("q9");
const overlay = document.getElementById("dark-overlay");
const modal = document.getElementById("answer-modal");
const modalClose = document.getElementById("modal-close")
const modalNum = document.getElementById("modal-num")
const modalAnswer = document.getElementById("modal-answer")

q1.addEventListener("click", (event) => {
  overlay.style.display = "block";
  overlay.style.opacity = 1;
  modalNum.textContent = "1.";
  modalAnswer.textContent = answers["1."];
});

q2.addEventListener("click", (event) => {
  overlay.style.display = "block";
  overlay.style.opacity = 1;
  modalNum.textContent = "2.";
  modalAnswer.textContent = answers["2."];
});

q3.addEventListener("click", (event) => {
  overlay.style.display = "block";
  overlay.style.opacity = 1;
  modalNum.textContent = "3.";
  modalAnswer.textContent = answers["3."];
});

q4.addEventListener("click", (event) => {
  overlay.style.display = "block";
  overlay.style.opacity = 1;
  modalNum.textContent = "4.";
  modalAnswer.textContent = answers["4."];
});

q5.addEventListener("click", (event) => {
  overlay.style.display = "block";
  overlay.style.opacity = 1;
  modalNum.textContent = "5.";
  modalAnswer.textContent = answers["5."];
});

q6.addEventListener("click", (event) => {
  overlay.style.display = "block";
  overlay.style.opacity = 1;
  modalNum.textContent = "6.";
  modalAnswer.textContent = answers["6."];
});

q7.addEventListener("click", (event) => {
  overlay.style.display = "block";
  overlay.style.opacity = 1;
  modalNum.textContent = "7.";
  modalAnswer.textContent = answers["7."];
});

q8.addEventListener("click", (event) => {
  overlay.style.display = "block";
  overlay.style.opacity = 1;
  modalNum.textContent = "8.";
  modalAnswer.textContent = answers["8."];
});

q9.addEventListener("click", (event) => {
  overlay.style.display = "block";
  overlay.style.opacity = 1;
  modalNum.textContent = "9.";
  modalAnswer.textContent = answers["9."];
});

modalClose.addEventListener("click", (event) => {
  overlay.style.display = "none";
  overlay.style.opacity = 0;
});
