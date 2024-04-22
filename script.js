const scriptURL =
  "https://script.google.com/macros/s/AKfycbw-dqVOaH2hZhbJWMJ78Rm2OqqBhqx1l4yLNZmoVGLJ0S542tM4EiskRlrxyM-RVBRp/exec";

const form = document.getElementById("contact-form");
const submitButton = document.getElementById("submit");
const loadingBar = document.getElementById("loading-bar");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitButton.classList.add("closed-pointer"); // Change cursor to closed pointer
  loadingBar.style.display = "block"; // Show the loading bar

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => response.json())
    .then((data) => {
      loadingBar.style.display = "none"; // Hide the loading bar
      alert("Thank you! Your form is submitted successfully.");
      form.reset(); // Optional: Clear the form after submission
      submitButton.classList.remove("closed-pointer"); // Reset cursor after submission
    })
    .catch((error) => {
      loadingBar.style.display = "none"; // Hide the loading bar if there's an error
      console.error("Error!", error.message);
      submitButton.classList.remove("closed-pointer"); // Reset cursor if there's an error
    });
});
