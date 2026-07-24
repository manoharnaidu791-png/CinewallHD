// CineWall HD

function updateNoResults() {
  const cards = [...document.querySelectorAll(".card")];
  const hasVisibleCard = cards.some(card => card.style.display !== "none");
  document.getElementById("noResults").style.display = hasVisibleCard ? "none" : "block";
}

function searchWallpaper() {
  const input = document.getElementById("search").value.trim().toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(input) ? "" : "none";
  });

  updateNoResults();
}

function filterCat(category, clickedButton) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.style.display =
      category === "All" || card.dataset.cat === category ? "" : "none";
  });

  document.getElementById("search").value = "";

  document.querySelectorAll(".filter-btn").forEach(button => {
    button.classList.remove("active");
  });

  if (clickedButton) {
    clickedButton.classList.add("active");
  }

  updateNoResults();
}

function openImage(src) {
  const viewer = document.getElementById("viewer");
  const viewerImg = document.getElementById("viewerImg");

  viewerImg.src = src;
  viewer.style.display = "flex";
  document.body.classList.add("no-scroll");
}

function closeImage() {
  const viewer = document.getElementById("viewer");
  const viewerImg = document.getElementById("viewerImg");

  viewer.style.display = "none";
  viewerImg.src = "";
  document.body.classList.remove("no-scroll");
}

document.addEventListener("DOMContentLoaded", () => {
  const viewer = document.getElementById("viewer");

  viewer.addEventListener("click", event => {
    if (event.target === viewer) {
      closeImage();
    }
  });

  updateNoResults();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeImage();
  }
});

function shareWhatsApp(title, imagePath) {
  const imageUrl = new URL(imagePath, window.location.href).href;
  const message =
    `🌟 ${title}\n\nView wallpaper: ${imageUrl}\n\nMore wallpapers: ${window.location.origin}`;

  window.open(
    `https://wa.me/?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer"
  );
}

console.log("CineWall HD loaded successfully.");
