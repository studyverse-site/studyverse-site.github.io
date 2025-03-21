document.addEventListener("DOMContentLoaded", () => {
  // Inject the CSS for horizontal layout of extra links
  const style = document.createElement("style");
  style.innerHTML = `
    .extra-links {
      display: flex;
      gap: 10px;  Adjust space between the icons 
      /*flex-wrap: nowrap; Prevent wrapping */
    }
    
    .extra-links a {
     /* display: inline-block;*/
    }
  `;
  document.head.appendChild(style);

  // Check for a logged-in user in localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const user = loggedInUser || {
    username: "Guest",
    photo: "/uploads/branding/favicon.png",
  };

  // Construct the navbar HTML
  const navbarHTML = `
    <nav class="navbar">
      <div class="nav-left-bg">
      <h3><i class="fa-solid fa-clock"></i> : <span id="timespent">00:00:00</span></h3>
      </div>
      <div class="nav-center-bg">
        <div class="nav-links">
          <a href="/mathtools"><i class="fa-solid fa-calculator fa-lg"></i></a>
          <a href="/sciencetools"><i class="fa-solid fa-atom fa-lg"></i></a>
          <a href="/englishtools"><i class="fa-solid fa-book-open fa-lg"></i></a>
        </div>
          <a href="/index.html" class="logo">
          <img src="/uploads/branding/favicon.png" alt="GameVerse Logo">
        </a>
        <div class="nav-links">
          <a href="/calender"><i class="fas fa-calendar fa-lg"></i></a>
          <a href="/todolist"><i class="fa-solid fa-clipboard-list fa-lg"></i></a>
          <a href="/notes"><i class="fa-solid fa-edit fa-lg"></i></a>
          </div>
        </div>
      </div>
      <!-- Right section: Profile information -->
      <div class="nav-right-bg">
        <a href="/editprofile.html" class="profile-link">
          <img src="${user.photo}" alt="${user.username}" class="profile-img">
          <span class="username">${user.username}</span><img height="30px" width="30px" src="/uploads/images/profile-verified.png" alt="This is a verified GameVerse profile" title="This is a verified GameVerse profile">
        </a>
      </div>
    </nav>
  `;

  // Inject the navbar at the very top of the body
  document.body.insertAdjacentHTML("afterbegin", navbarHTML);

  // Add event listener to toggle the visibility of extra links
  const plusIcon = document.querySelector(".plus-icon");
  const extraLinks = document.querySelector(".extra-links");

  plusIcon.addEventListener("click", () => {
    if (extraLinks.style.display === "none") {
      extraLinks.style.display = "flex"; // Show the extra links horizontally
      plusIcon.innerHTML = '<i class="fa fa-minus fa-lg"></i>'; // Change plus to minus
    } else {
      extraLinks.style.display = "none";
      plusIcon.innerHTML = '<i class="fa fa-plus fa-lg"></i>'; // Change minus back to plus
    }
  });
});
