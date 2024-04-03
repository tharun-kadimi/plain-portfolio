// const darkModeToggle = document.getElementById("darkModeToggle");
// const body = document.body;

// darkModeToggle.addEventListener("click", function () {
//   body.classList.toggle("dark-mode");
// });
const toggleModeButton = document.getElementById("toggleMode");
const body = document.body;

toggleModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
