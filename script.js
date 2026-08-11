const playlists = {
  good: {
    label: "GOOD",
    emoji: "😊",
    songs: [
      { title: "Morning Light", artist: "RAABTA FM", src: "audio/morning-light.mp3" },
      { title: "Easy Days", artist: "RAABTA FM", src: "audio/easy-days.mp3" }
    ]
  },

  calm: {
    label: "CALM",
    emoji: "🌿",
    songs: [
      { title: "Still Air", artist: "RAABTA FM", src: "audio/still-air.mp3" },
      { title: "Soft Rain", artist: "RAABTA FM", src: "audio/soft-rain.mp3" }
    ]
  },

  love: {
    label: "LOVE",
    emoji: "❤️",
    songs: [
      { title: "Close to You", artist: "RAABTA FM", src: "audio/close-to-you.mp3" },
      { title: "Afterglow", artist: "RAABTA FM", src: "audio/afterglow.mp3" }
    ]
  },

  low: {
    label: "LOW",
    emoji: "🌧️",
    songs: [
      { title: "Rain on Glass", artist: "RAABTA FM", src: "audio/rain-on-glass.mp3" },
      { title: "Blue Evening", artist: "RAABTA FM", src: "audio/blue-evening.mp3" }
    ]
  },

  chill: {
    label: "CHILL",
    emoji: "🌙",
    songs: [
      { title: "Late Night", artist: "RAABTA FM", src: "audio/late-night.mp3" },
      { title: "City Lights", artist: "RAABTA FM", src: "audio/city-lights.mp3" }
    ]
  },

  energy: {
    label: "ENERGY",
    emoji: "🔥",
    songs: [
      { title: "Wake Up", artist: "RAABTA FM", src: "audio/wake-up.mp3" },
      { title: "Move", artist: "RAABTA FM", src: "audio/move.mp3" }
    ]
  }
};

const moods = [
  ["good", "😊", "Good", "Feeling good"],
  ["calm", "🌿", "Calm", "Need some peace"],
  ["love", "❤️", "Love", "Feeling close"],
  ["low", "🌧️", "Low", "Need a little comfort"],
  ["chill", "🌙", "Chill", "Just taking it easy"],
  ["energy", "🔥", "Energy", "Ready to move"]
];

const moodsEl = document.getElementById("moods");
const hero = document.querySelector(".hero");
const player = document.getElementById("player");
const audio = document.getElementById("audio
// Render mood buttons
if (moodsEl && typeof playlists !== "undefined") {
  moodsEl.innerHTML = Object.keys(playlists)
    .map(key => {
      const mood = playlists[key];
      return `<button class="mood-btn" data-mood="${key}">${mood.emoji || ''} ${mood.label}</button>`;
    })
    .join("");
}
// Add click listener to mood buttons
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".mood-btn");
  if (!btn) return;
  
  const moodKey = btn.getAttribute("data-mood");
  const selectedMood = playlists[moodKey];
  
  if (selectedMood) {
    if (hero) hero.classList.add("hidden");
    if (player) player.classList.remove("hidden");
    
    const moodTitle = document.getElementById("playerMood");
    if (moodTitle) moodTitle.textContent = `${selectedMood.emoji || ''} ${selectedMood.label}`;
  }
});

// Back button listener
const backBtn = document.getElementById("backBtn");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    if (player) player.classList.add("hidden");
    if (hero) hero.classList.remove("hidden");
  });
}
