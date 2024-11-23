window.addEventListener('message', (event) => {
  // Make sure the message comes from the expected origin
  if (event.origin !== 'https://my.tradeverse.it' && event.origin !== 'https://www.tradeverse.it' && event.origin !== 'https://tradeverse.it') {
      console.error('Received message from unauthorized origin:', event.origin);
      return;
  }

  // Handle the received token
  if (event.data && event.data.token && event.data.current_plan) {
      const token = event.data.token;
      const current_plan = event.data.current_plan;
      console.log("Received token from tradeverse.it:", token);
      console.log("Received plan from tradeverse.it:", current_plan);
      localStorage.setItem("jwt", token);
      localStorage.setItem("currente_plan", current_plan);
      // You can use the token here, e.g., store it or use it for authenticated requests
  }
});

// Request the token from tradeverse.it when the iframe loads
window.onload = function() {
  const iframe = document.getElementById('tokenIframe');
  iframe.onload = function() {
      iframe.contentWindow.postMessage('getToken', 'https://tradeverse.it/login.html');
  };
};
