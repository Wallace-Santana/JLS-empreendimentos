document.addEventListener("DOMContentLoaded", function () {
  
  
  const faders = document.querySelectorAll(".fade-in");
  if (faders.length > 0) {
    const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) { return; }
        else { entry.target.classList.add("visible"); appearOnScroll.unobserve(entry.target); }
      });
    }, appearOptions);
    faders.forEach((fader) => { appearOnScroll.observe(fader); });
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

  const portfolioCarousel = document.querySelector('.portfolio-carousel');
  if (portfolioCarousel) {
    const swiper = new Swiper('.portfolio-carousel', {
      effect: 'slide', slidesPerView: 4, spaceBetween: 30, loop: true,
      autoplay: { delay: 2500, disableOnInteraction: false },
      breakpoints: { 320: { slidesPerView: 1, spaceBetween: 10 }, 640: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 30 }, 1200: { slidesPerView: 4, spaceBetween: 30 }},
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });
  }


  const menuHamburguer = document.querySelector('.menu-hamburguer');
  const navMenu = document.querySelector('header nav');
  if (menuHamburguer && navMenu && header) {
    menuHamburguer.addEventListener('click', () => {
      menuHamburguer.classList.toggle('ativo');
      navMenu.classList.toggle('ativo');
      header.classList.toggle('menu-aberto'); 
      document.documentElement.classList.toggle('body-no-scroll');
      if (navMenu.classList.contains('ativo')) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-assessoria');
    const openBtn = document.getElementById('open-modal-btn');
    const closeBtn = document.querySelector('.close-modal');

    // Função para abrir o modal
    openBtn.onclick = function(e) {
        e.preventDefault(); // Impede a rolagem para o topo
        modal.style.display = 'block';
    }

    // Função para fechar no 'X'
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Função para fechar clicando fora do modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
});