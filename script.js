// ==================== MENÚ HAMBURGUESA ====================
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
burger.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("active");
});

// Cerrar menú al hacer clic en enlaces normales
document.querySelectorAll('.nav-links > li > a:not(.toggle)').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ==================== SUBMENÚS ====================
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll(".submenu > .toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const parent = toggle.parentElement;
      const wasOpen = parent.classList.contains("open");

      // Cerrar todos primero
      document.querySelectorAll(".submenu").forEach(s => s.classList.remove("open"));

      if (!wasOpen) {
        parent.classList.add("open");

        // ---- Posicionamiento dinámico solo en desktop ----
        if (window.innerWidth > 768) {
          const list = parent.querySelector(".submenu-list");
          const rect = toggle.getBoundingClientRect();
          // Borde derecho del submenú = borde derecho del botón toggle
          list.style.left = (rect.right - list.offsetWidth) + "px";
        }
      }
    });
  });

  // Cerrar submenús al hacer clic fuera (solo desktop)
  document.addEventListener("click", (e) => {
    if (window.innerWidth > 768) {
      document.querySelectorAll(".submenu").forEach(sub => {
        if (!sub.contains(e.target)) {
          sub.classList.remove("open");
        }
      });
    }
  });
});

// ==================== INSTAGRAM BUTTON ====================
const btnInsta = document.getElementById("btnInsta");
if (btnInsta) {
  btnInsta.addEventListener("click", function() {
    window.location.href =
      "https://www.instagram.com/ipt_donbosco?igsh=bDZrYzR1NWt5ZHUz";
  });
}

// ==================== PARALLAX TEXT ====================
const parallaxText = document.querySelector('.parallax-text');
if (parallaxText) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const speed = 0.5;
    parallaxText.style.transform = `translateY(${scrollY * speed}px)`;
  });
}