document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".fade-in");
  if (faders.length > 0) {
    const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver(function (entries, io) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      });
    }, appearOptions);
    faders.forEach((f) => appearOnScroll.observe(f));
  }

  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const seuNumeroWhatsapp = "5571988282289";
      const nome = document.querySelector('input[name="name"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const mensagem = document.querySelector('textarea[name="message"]').value;
      const textoMensagem = `Olá! Tudo bem?.\n\n*Meu nome é:* ${nome}\n*O meu email é:* ${email}\n*Tenho interesse em:* ${mensagem}`;
      const mensagemCodificada = encodeURIComponent(textoMensagem);
      const whatsappURL = `https://wa.me/${seuNumeroWhatsapp}?text=${mensagemCodificada}`;
      window.open(whatsappURL, "_blank");
    });
  }

  const portfolioCarousel = document.querySelector(".portfolio-carousel");
  if (portfolioCarousel) {
    new Swiper(".portfolio-carousel", {
      effect: "slide",
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      autoplay: { delay: 2500, disableOnInteraction: false },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
        1200: { slidesPerView: 4, spaceBetween: 30 }
      },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
    });
  }

  const menuHamburguer = document.querySelector(".menu-hamburguer");
  const navMenu = document.querySelector("header nav");
  const body = document.body;
  let lockY = 0;

  function abrirMenu() {
    lockY = window.scrollY || window.pageYOffset || 0;
    body.style.position = "fixed";
    body.style.top = `-${lockY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.classList.add("body-no-scroll");
    menuHamburguer.classList.add("ativo");
    navMenu.classList.add("ativo");
  }

  function fecharMenu() {
    menuHamburguer.classList.remove("ativo");
    navMenu.classList.remove("ativo");
    body.classList.remove("body-no-scroll");
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";
    window.scrollTo(0, lockY);
  }

  if (menuHamburguer && navMenu) {
    menuHamburguer.addEventListener("click", () => {
      if (navMenu.classList.contains("ativo")) fecharMenu();
      else abrirMenu();
    });
    navMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", fecharMenu));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && navMenu.classList.contains("ativo")) fecharMenu(); });
    navMenu.addEventListener("click", (e) => { if (e.target === navMenu) fecharMenu(); });
  }
});
