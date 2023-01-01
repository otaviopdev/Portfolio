// Favicon
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Projetos | Otávio Pinheiro";
    $("#favicon").attr("href", "../favicon.ico");
  } else {
    document.title = "Projetos | Otávio Pinheiro";
    $("#favicon").attr("href", "../favicon.ico");
  }
});

// script hamburger untuk mobile responsive
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
