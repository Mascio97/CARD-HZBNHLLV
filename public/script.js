let collection = [];

async function loadCards() {
  const res = await fetch("cards.json");
  return await res.json();
}

function addToCollection(cards) {
  cards.forEach(card => {
    collection.push(card);
  });
  updateCollectionUI();
}

function updateCollectionUI() {
  const container = document.getElementById("collection");
  container.innerHTML = "";
  collection.forEach(card => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<img src="${card.image}" alt="${card.name}"><br>${card.name}`;
    container.appendChild(div);
  });
}

document.getElementById("openPackBtn").addEventListener("click", async () => {
  const cards = await loadCards();
  const pack = [];
  for (let i = 0; i < 3; i++) {
    pack.push(cards[Math.floor(Math.random() * cards.length)]);
  }
  const packResult = document.getElementById("packResult");
  packResult.innerHTML = `<h3>You got:</h3>`;
  pack.forEach(card => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<img src="${card.image}" alt="${card.name}"><br>${card.name}`;
    packResult.appendChild(div);
  });
  addToCollection(pack);
});
