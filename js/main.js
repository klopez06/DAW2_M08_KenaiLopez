/* =========================================================
   PORTFOLIO STEAMPUNK · main.js
   1. Engranajes SVG que giran con el scroll
   2. Menú móvil
   3. Enlace activo según la sección visible
   4. Filtro de proyectos
   5. Copiar correo
   6. Año del pie
   ========================================================= */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. Engranajes ---------- */

  // Devuelve el path SVG de un círculo (para los agujeros del engranaje)
  function circlePath(cx, cy, r) {
    return (
      `M ${cx + r} ${cy} ` +
      `A ${r} ${r} 0 1 0 ${cx - r} ${cy} ` +
      `A ${r} ${r} 0 1 0 ${cx + r} ${cy} Z`
    );
  }

  // Construye el SVG de un engranaje con "teeth" dientes
  function buildGear(teeth) {
    const outer = 96;  // radio de la punta del diente
    const root = 80;   // radio de la base del diente
    const step = (Math.PI * 2) / teeth;
    const point = (radius, angle) =>
      `${(Math.cos(angle) * radius).toFixed(2)} ${(Math.sin(angle) * radius).toFixed(2)}`;

    let d = "";
    for (let i = 0; i < teeth; i++) {
      const a = i * step;
      const pts = [
        point(root, a),
        point(outer, a + step * 0.14),
        point(outer, a + step * 0.36),
        point(root, a + step * 0.5)
      ];
      d += (i === 0 ? "M " : "L ") + pts.join(" L ") + " ";
    }
    d += "Z ";

    // Agujero central y seis orificios alrededor
    d += circlePath(0, 0, 16);
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i;
      d += " " + circlePath(Math.cos(a) * 50, Math.sin(a) * 50, 14);
    }

    return (
      `<svg viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg" focusable="false">` +
      `<path d="${d}" fill="currentColor" fill-rule="evenodd"/></svg>`
    );
  }

  const gears = Array.from(document.querySelectorAll(".gear"));
  gears.forEach((gear) => {
    gear.innerHTML = buildGear(parseInt(gear.dataset.teeth, 10) || 16);
  });

  // Los engranajes giran según el scroll; cada uno con su velocidad y sentido
  if (gears.length && !prefersReducedMotion) {
    let ticking = false;

    const rotate = () => {
      const y = window.scrollY;
      gears.forEach((gear) => {
        const speed = parseFloat(gear.dataset.speed) || 0.1;
        gear.style.setProperty("--rot", (y * speed).toFixed(2));
      });
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(rotate);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  /* ---------- 2. Menú móvil ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("menu-principal");

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector(".visually-hidden").textContent = open ? "Cerrar menú" : "Abrir menú";
    menu.classList.toggle("open", open);
  }

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Cierra al elegir una sección
    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenu(false);
    });

    // Cierra con Escape y devuelve el foco al botón
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.classList.contains("open")) {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  /* ---------- 3. Enlace activo ---------- */
  const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
            if (isCurrent) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
  }

  /* ---------- 4. Filtro de proyectos ---------- */
  const filterButtons = Array.from(document.querySelectorAll(".filter"));
  const projects = Array.from(document.querySelectorAll(".project"));
  const emptyMessage = document.querySelector(".empty-message");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((b) => {
        const active = b === button;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", String(active));
      });

      let visible = 0;
      projects.forEach((project) => {
        const categories = (project.dataset.category || "").split(" ");
        const show = filter === "all" || categories.includes(filter);
        project.hidden = !show;
        if (show) visible++;
      });

      if (emptyMessage) emptyMessage.hidden = visible > 0;
    });
  });

  /* ---------- 5. Copiar correo ---------- */
  const copyButton = document.getElementById("copiar-correo");
  const mailLink = document.getElementById("correo");
  const status = document.getElementById("estado-copia");

  if (copyButton && mailLink) {
    copyButton.addEventListener("click", async () => {
      const email = mailLink.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        copyButton.textContent = "Copiado";
        if (status) status.textContent = "Correo copiado al portapapeles.";
      } catch (error) {
        copyButton.textContent = "No se pudo copiar";
        if (status) status.textContent = "No se pudo copiar. Selecciona el correo manualmente.";
      }
      setTimeout(() => {
        copyButton.textContent = "Copiar correo";
      }, 2000);
    });
  }
})();
