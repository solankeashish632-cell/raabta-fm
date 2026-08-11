// Replace these Spotify URLs with your favorite playlists or songs!
const playlists = {
  good: {
    label: "GOOD",
    emoji: "😊",
    // Paste any Spotify playlist or album URL here:
    spotifyUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxA2346934"
  },
  calm: {
    label: "CALM",
    emoji: "🌿",
    spotifyUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpd332521"
  },
  love: {
    label: "LOVE",
    emoji: "❤️",
    spotifyUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsA23chBh"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("home");
  const player = document.getElementById("player");
  const playerMood = document.getElementById("playerMood");
  const backBtn = document.getElementById("backBtn");
  const cover = document.getElementById("cover");

  // Handle Mood Click
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

      // Add the Spotify Player Box inside the 'cover' div
      if (cover) {
        cover.innerHTML = `
          <iframe 
            style="border-radius:12px; margin-top: 15px;" 
            src="${moodData.spotifyUrl}" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
        `;
      }
    }
  });

  // Handle Back Button
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      if (player) player.style.display = "none";
      if (hero) hero.style.display = "block";
      if (cover) cover.innerHTML = ""; // Stop music when going back
    });
  }
});
