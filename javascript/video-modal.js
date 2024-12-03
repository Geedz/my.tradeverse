video_titles = {
  "vid1": "#1 - Intro | TradeVerse"
};

video_urls = {
  "vid1": "https://player.vimeo.com/video/1035034592?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
}

const vid1 = document.getElementById("vid1");
const frame = document.getElementById("video-frame");
const overlay = document.getElementById("dark-overlay");
const modal = document.getElementById("frame-container");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-video-title");

vid1.addEventListener("click", (event) => {
  modal.style.display = "block";
  modalTitle.textContent = video_titles["vid1"];
  frame.style.display = "block";
  frame.setAttribute("src", video_urls["vid1"]);
})

modalClose.addEventListener("click", (event) => {
  modal.style.display = "none";
  frame.style.display = "none";
  frame.setAttribute("src", "");
})
