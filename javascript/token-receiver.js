window.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('tokenIframe');

  iframe.onload = function() {
      console.log("Iframe loaded, sending getToken request...");
      iframe.contentWindow.postMessage('getToken', 'https://tradeverse.it');
  };

  window.addEventListener('message', (event) => {
      const allowedOrigins = [
          'https://tradeverse.it',
          'https://www.tradeverse.it',
          'https://my.tradeverse.it',
          'https://plans.tradeverse.it',
          'https://admin.tradeverse.it'
      ];

      if (!allowedOrigins.includes(event.origin)) {
          console.error('Received message from unauthorized origin:', event.origin);
          return;
      }

      // Handle received token and current_plan
      if (event.data && event.data.token && event.data.current_plan) {
          console.log("Received token from helper:", event.data.token);
          console.log("Received current plan from helper:", event.data.current_plan);
          localStorage.setItem("jwt", event.data.token);  
          localStorage.setItem("current_plan", event.data.current_plan);  
      }
  });
});
