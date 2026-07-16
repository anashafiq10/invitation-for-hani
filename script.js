const invite = {
  herName: "beautiful Hani sayang",
  place: "Monograph",
  when: "Friday lunch",
  time: "After Friday Prayer",
  plan: "Lunch, a walk, and a movie",
  dressCode: "Wear whatever makes you feel cute (psstt cream beige if possible)",
  sideNote:
    "Hellowwww, sayang. Yes, a walk (sowwyy), i know you not a big fan, buttttttt trust me, we walk together ( I carry you but a little bit of walking kenala hehe). Btw, You can park your car at open air Central Market, cari yg bawah pokok",
  message: "I want to take you somewhere sweet, spend real time with you, and make the whole evening feel easy, see youu there love",
  mapLink: "https://maps.app.goo.gl/6b7P5htrYd5jTDTbA",
};

const stages = document.querySelectorAll(".stage");
const fields = document.querySelectorAll("[data-field]");
const responseNote = document.querySelector("[data-response-note]");

function showStage(name) {
  stages.forEach((stage) => {
    stage.classList.toggle("stage-active", stage.dataset.stage === name);
  });
}

fields.forEach((field) => {
  const key = field.dataset.field;
  if (key === "mapLink") {
    field.href = invite.mapLink;
    return;
  }

  field.textContent = invite[key];
});

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => showStage(button.dataset.next));
});

document.querySelectorAll("[data-answer]").forEach((button) => {
  button.addEventListener("click", () => {
    responseNote.textContent = "Perfect. I was hoping you would say that.";
    showStage("accepted");
  });
});
