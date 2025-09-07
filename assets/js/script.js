const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
  menuToggle.classList.toggle("open");
});


const botonesCard = document.querySelectorAll(".btn-card");

botonesCard.forEach(boton => {
  boton.addEventListener("click", () => {
    const link = boton.getAttribute("data-link");
    window.open(link, "_blank");
  });
});


const form = document.getElementById("form-contacto");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("✅ Tu formulario fue enviado exitosamente");
  form.reset();
  alert("✅ Tu formulario fue enviado exitosamente");
});

