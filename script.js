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
  }
];

// Function to render 6 most recent photos
function renderRecentPhotos() {
  const grid = document.getElementById("photoGrid");

  const recent = photos
    .sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt))
    .slice(0, 6);

  recent.forEach(photo => {
    const card = document.createElement("div");
    card.className = "photo-card";

    // Format date nicely (e.g. Aug 3, 2025)
    const date = new Date(photo.uploadedAt);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);

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


renderRecentPhotos();
