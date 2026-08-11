const playlists = {
  good: {
    label: "GOOD",
    emoji: "😊",
    songs: [
      { title: "Morning Light", artist: "RAABTA FM" },
      { title: "Easy Days", artist: "RAABTA FM" }
    ]
  },
  calm: {
    label: "CALM",
    emoji: "🌿",
    songs: [
      { title: "Still Air", artist: "RAABTA FM" },
      { title: "Soft Rain", artist: "RAABTA FM" }
    ]
  },
  love: {
    label: "LOVE",
    emoji: "❤️",
    songs: [
      { title: "Close to You", artist: "RAABTA FM" },
      { title: "Afterglow", artist: "RAABTA FM" }
    ]
  }
};

// Handle clicks on the website
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("home");
  const player = document.getElementById("player");
  const playerMood = document.getElementById("playerMood");
  const backBtn = document.getElementById("backBtn");

  // Listen for clicks on mood buttons
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest(".mood-btn");
    if (!btn) return;

    const moodKey = btn.getAttribute("data-mood");
    const moodData = playlists[moodKey];

    if (moodData) {
      if (hero) hero.style.display = "none";
      if (player) {
        player.style.display = "block";
        player.classList.remove("hidden");
      }
      if (playerMood) {
        playerMood.textContent = `${moodData.emoji} ${moodData.label}`;
      }
    }
  });

  // Listen for back button click
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      if (player) player.style.display = "none";
      if (hero) hero.style.display = "block";
    });
  }
});
