function getCookie(name) {
  let nameEQ = name + "=";
  let cookiesArray = document.cookie.split(';');
  for (let i = 0; i < cookiesArray.length; i++) {
      let cookie = cookiesArray[i];
      while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length, cookie.length);
      }
  }
  return null;
}


document.addEventListener("DOMContentLoaded", function () {
  const token = getCookie("jwt");

  if (!token) {
      console.error("No token found");
      return;
  }

  // Fetch and display watched videos
  fetchWatchedVideos(token);

  // Add click event listeners to video containers
  const videoContainers = document.querySelectorAll(".video-container");

  videoContainers.forEach(video => {
      video.addEventListener("click", function () {
          const videoId = this.getAttribute("data-video-id");

          if (videoId) {
              markVideoAsWatched(videoId);
          } else {
              console.error("No videoId found for the clicked video");
          }
      });
  });
});

async function fetchWatchedVideos(token) {
  try {
      const response = await fetch('https://api.tradeverse.it/php/get-videos-watched.php', {
          method: 'POST',
          mode: "cors",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          }
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.valid) {
          console.error("Error from server:", data.message);
          return;
      }

      const watchedVideos = data.watched_videos; // Array of watched video IDs

      // Mark thumbnails with a tick icon
      watchedVideos.forEach(videoId => {
          const videoContainer = document.querySelector(`[data-video-id="${videoId}"]`);
          if (videoContainer) {
              const tickIcon = videoContainer.querySelector(".video-watched-icon");
              if (tickIcon) {
                  tickIcon.style.display = "block"; // Show the tick icon
              }
          }
      });
  } catch (error) {
      console.error("Failed to fetch watched videos:", error);
  }
}

async function markVideoAsWatched(videoId) {
  const token = getCookie("jwt");

  if (!token) {
      console.error("No token found");
      return;
  }

  if (!videoId) {
      console.error("Invalid videoId");
      return;
  }

  try {
      const response = await fetch('https://api.tradeverse.it/php/update-videos-watched.php', {
          method: 'POST',
          mode: "cors",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({videoId}) // Send the videoId in the request body
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.valid) {
          console.log(`Video ${videoId} marked as watched`);

          // Select the specific tick icon for the video container
          const videoContainer = document.querySelector(`[data-video-id="${videoId}"]`);
          if (videoContainer) {
              const tickIcon = videoContainer.querySelector(".video-watched-icon");
              if (tickIcon) {
                  tickIcon.style.display = "block"; // Show the tick icon
              }
          }
      } else if (data.message === "Video already watched") {
          console.log(`Video already watched: ${data.video_title}`);
      }
  } catch (error) {
      console.error("Failed to update watched videos:", error);
  }
}
