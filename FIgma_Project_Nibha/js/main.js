const loginBtn = document.querySelector(".login-btn");
const loginOverlay = document.getElementById("loginOverlay");
const closeLogin = document.getElementById("closeLogin");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginOverlay.style.display = "flex";
});

closeLogin.addEventListener("click", () => {
  loginOverlay.style.display = "none";
});

loginOverlay.addEventListener("click", (e) => {
  if (e.target === loginOverlay) {
    loginOverlay.style.display = "none";
  }
});