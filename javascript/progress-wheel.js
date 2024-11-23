document.addEventListener("DOMContentLoaded", async function () {
// Assume you already have the token stored somewhere, e.g., in localStorage
  const token = localStorage.getItem("jwt");

  // Check if the token exists
  if (!token) {
      console.error("No token found");
      return;
  }

  try {
      // Make a POST request to the PHP endpoint
      const response = await fetch('https://api.tradeverse.it/php/progress_wheel.php', {
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

      // Parse the response as JSON
      const data = await response.json();

      if (data.valid === false) {
          console.error("Error from server: ", data.message);
          return;
      } else {
        // Extract the videos_watched value from the response
        const videosWatched = data.videos_watched;
        // console.log(videosWatched);
        const progressValue = videosWatched*100/60; // Example value
        // Set progress value between 0 and 100
        const progressWheel = document.querySelector(".circular-progress");

        progressWheel.style.setProperty('--progress', progressValue);
        document.querySelector(".progress-value").textContent = `${videosWatched}/60`;

        if (videosWatched <= 20) {
          document.getElementById("easy-title").textContent = `${videosWatched}/20`;
        } else if (videosWatched > 20 && videosWatched <= 40){
          document.getElementById("easy-title").textContent = `20/20`;
          document.getElementById("medium-title").textContent = `${videosWatched-20}/20`;
        } else {
          document.getElementById("easy-title").textContent = `20/20`;
          document.getElementById("medium-title").textContent = `20/20`;
          document.getElementById("hard-title").textContent = `${videosWatched-40}/20`;
        }

      }
  } catch (error) {
      console.error("Failed to fetch videos watched: ", error);
  }

});
