const photos = [
  {
    id: 1,
    url: "images/ID1.png",
    aircraft: "Airbus A380-861",
    airline: "British Airways",
    uploadedAt: "2025-08-04T00:00:00Z",
    author: "Pamberman"
  },
  {
    id: 2,
    url: "images/ID2.png",
    aircraft: "Lockheed L-1011-1",
    airline: "Delta Air Lines",
    uploadedAt: "2025-08-02T00:00:00Z",
    author: "LFC_darwizzy"
  },
  {
    id: 3,
    url: "images/ID3.png",
    aircraft: "Airbus H135",
    airline: "Police",
    uploadedAt: "2025-08-02T00:00:00Z",
    author: "LFC_darwizzy"
  },
  {
    id: 4,
    url: "images/ID4.png",
    aircraft: "Airbus A380-861",
    airline: "Emirates",
    uploadedAt: "2025-06-14T01:46:00Z",
    author: "Yordan"
  },
  {
    id: 5,
    url: "images/ID5.png",
    aircraft: "Concorde",
    airline: "British Airways",
    uploadedAt: "2025-08-05T18:26:00Z",
    author: "Strato"
  },
  {
    id: 6,
    url: "images/ID6.png",
    aircraft: "ATR 72-500",
    airline: "Flybe",
    uploadedAt: "2025-08-05T19:22:47Z",
    author: "Mare_li23"
  },
  { id: 7,
    url: "images/ID7.png",
    aircraft: "Boeing 777-319ER",
    airline: "Air New Zealand",
    uploadedAt: "2025-08-05T19:12:04Z",
    author: "Mare_li23"
  }
];

function scorePhoto(photo, query) {
  let score = 0;
  const q = query.toLowerCase();

  if (photo.aircraft && photo.aircraft.toLowerCase().includes(q)) score += 2;
  if (photo.airline && photo.airline.toLowerCase().includes(q)) score += 1;

  console.log(`Scoring: ${photo.aircraft} / ${photo.airline} → Score: ${score}`);

  return score;
}


function renderResults(filtered) {
  const grid = document.getElementById("resultsGrid");
  const noResults = document.getElementById("noResults");
  grid.innerHTML = "";

  if (filtered.length === 0) {
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";

  filtered.forEach(photo => {
    const date = new Date(photo.uploadedAt);
    const formattedDate = date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });

    const card = document.createElement("div");
    card.className = "photo-card";
    card.innerHTML = `
        <div class="photo-wrapper">
            <a href="${photo.url}" target="_blank">
                <img src="${photo.url}" alt="${photo.aircraft} - ${photo.airline}">
            </a>
            <div class="overlay">© ${photo.author}</div>
        </div>
        <ul class="photo-info">
            <li><strong>Aircraft:</strong> ${photo.aircraft}</li>
            <li><strong>Airline:</strong> ${photo.airline}</li>
            <li><strong>Date:</strong> ${formattedDate}</li>
        </ul>
    `;

    grid.appendChild(card);
  });
}

function handleSearch(event) {
  const query = event.target.value.trim();
  if (query === "") {
    renderResults([]); // show nothing if search is empty
    return;
  }

  const scored = photos
    .map(p => ({ ...p, score: scorePhoto(p, query) }))
    .filter(p => p.score > 0)
    .sort((a, b) => b.score - a.score);

  renderResults(scored);
}

document.getElementById("searchInput").addEventListener("input", handleSearch);
