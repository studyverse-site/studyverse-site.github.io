document.addEventListener('DOMContentLoaded', () => {
  // Check if the user has already agreed
  if (!localStorage.getItem('termsAgreed')) {
    // Create the popup container
    const popup = document.createElement('div');
    popup.id = 'terms-popup';
    popup.innerHTML = `
      <div class="terms-popup-overlay"></div>
      <div class="terms-popup-content">
        <h2>Terms and Conditions</h2>
        <p>
          By using this website, you agree to our <a href="/terms.html" target="_blank">Terms and Conditions</a> 
          and <a href="/privacy.html" target="_blank">Privacy Policy</a>.
        </p>
        <div class="terms-popup-buttons">
          <button id="agree-button">I Agree</button>
          <button id="disagree-button">I Don't Agree</button>
        </div>
      </div>
    `;
    document.body.appendChild(popup);

    // Add event listener to the "I Agree" button
    document.getElementById('agree-button').addEventListener('click', () => {
      localStorage.setItem('termsAgreed', 'true'); // Save agreement in localStorage
      popup.remove(); // Remove the popup
    });

    // Add event listener to the "I Don't Agree" button
    document.getElementById('disagree-button').addEventListener('click', () => {
      alert("You can't access the site without agreeing to the TOS and Privacy Policy.");
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
    if (Notification.permission === "default") {
        document.getElementById('notification-popup').style.display = 'block';
    }

    document.getElementById('enable-notifications-btn').addEventListener('click', function() {
        requestNotificationPermission();
    });
});

function requestNotificationPermission() {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            alert("Notifications enabled!");
        } else {
            alert("Notifications disabled!");
        }
        document.getElementById('notification-popup').style.display = 'none';
    });
}

function sendNotification(title, options) {
    if (Notification.permission === "granted") {
        new Notification(title, options);
    } else {
        alert("Please enable notifications to receive updates.");
    }
}

// Example usage
// sendNotification("Hello!", { body: "This is a test notification." });
