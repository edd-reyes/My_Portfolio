const msgBtn = document.getElementById("msgBtn");
const navbarBrand = document.querySelector(".navbar-brand");
const myName = document.querySelector(".myName");

msgBtn.addEventListener("click", () => {
  let showContactForm = document.getElementById("contactForm");
  if (showContactForm.style.display === "none") {
    showContactForm.style.display = "block";
  } else {
    showContactForm.style.display = "none";
  }
});

navbarBrand.addEventListener("mouseenter", () => {
  if ((navbarBrand.innerText = "E")) {
    navbarBrand.innerText = "EDDIE";
  }
});

navbarBrand.addEventListener("mouseout", () => {
  if ((navbarBrand.innerText = "EDDIE")) {
    navbarBrand.innerText = "E";
  }
});

myName.addEventListener("click", () => {
  switch (myName.innerText) {
    case "Eddie":
      myName.innerText = "Pedro Eddie Reyes";
      break;
    default:
      myName.innerText = "Eddie";
  }
});
