// Database of Spotify playlists for ALL moods
const moodPlaylists = {
  good: "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M",
  happy: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfA1vB11",
  sad: "https://open.spotify.com/embed/playlist/37i9dQZF17700000000000",
  energetic: "https://open.spotify.com/embed/playlist/37i9dQZF1DX76W2S8E2L3x",
  calm: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYAV23eC1v",
  focus: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ",
  chill: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0SM0L3C8d3f",
  romantic: "https://open.spotify.com/embed/playlist/37i9dQZF1DX2pSTOxSuP2W",
  party: "https://open.spotify.com/embed/playlist/37i9dQZF1DXa2Pv1uL1AA1",
  workout: "https://open.spotify.com/embed/playlist/37i9dQZF1DXUVB12f3e82W"
};

// Function called when a user selects any mood
function selectMood(mood) {
  // Convert mood name to lowercase to match the list above
  const selectedMood = mood.toLowerCase();
  const playerIframe = document.getElementById("spotify-player");

  if (moodPlaylists[selectedMood]) {
    // Updates the iframe player with the correct Spotify embed link
    playerIframe.src = moodPlaylists[selectedMood];
  } else {
    console.error("Mood not found in database:", mood);
  }
}
