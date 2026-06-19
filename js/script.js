// ── NAVBAR SCROLL
const nav = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
let scrollTicking = false;

function handleScroll() {
  nav.classList.toggle('scrolled', window.scrollY > 30);
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
  scrollTicking = false;
}

window.addEventListener('scroll', () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(handleScroll);
});

// ── NAV: smooth scroll + cierre automático del menú móvil
const navToggle = document.getElementById('nav-toggle');
const navLinksContainer = document.querySelector('.nav-links');

navAnchors.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    navToggle?.classList.remove('open');
    navLinksContainer?.classList.remove('open');
  });
});

// ── REVEAL ON SCROLL
const ro = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      ro.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// ── TERMINAL TYPEWRITER
const ttext = document.getElementById('terminal-text');
const cmds = ['cat bio.txt', 'ls proyectos/', 'git status', 'npm run dev', 'cat formacion.txt --status'];
let ci = 0, chi = 0, del = false;

function type() {
  const c = cmds[ci];
  ttext.textContent = del ? c.slice(0, chi - 1) + '_' : c.slice(0, chi + 1) + '_';
  if (!del) {
    chi++;
    if (chi === c.length) { del = true; setTimeout(type, 1600); return; }
  } else {
    chi--;
    if (chi === 0) { del = false; ci = (ci + 1) % cmds.length; }
  }
  setTimeout(type, del ? 35 : 70);
}

type();

// ── FALLBACK DE ICONOS ROTOS
document.querySelectorAll('.tool-icon-img, .inv-icon-img').forEach(img => {
  img.addEventListener('error', () => {
    const span = document.createElement('span');
    span.className = 'tool-icon-fallback';
    span.textContent = img.dataset.fallback || img.alt?.slice(0, 3).toUpperCase() || '?';
    img.replaceWith(span);
  }, { once: true });
});

// ── MODALES
let lastFocusedEl = null;

function abrirModal(id) {
  lastFocusedEl = document.activeElement;
  const modal = document.getElementById(id);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.m-box')?.setAttribute('tabindex', '-1');
  modal.querySelector('.m-close')?.focus();
}

function cerrarModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
  lastFocusedEl?.focus();
}

document.getElementById('btn-privacidad').addEventListener('click', e => {
  e.preventDefault();
  abrirModal('modal-privacidad');
});

document.getElementById('btn-legal').addEventListener('click', e => {
  e.preventDefault();
  abrirModal('modal-legal');
});

document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => cerrarModal(btn.dataset.close));
});

document.querySelectorAll('.m-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) cerrarModal(overlay.id);
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.m-overlay.open').forEach(m => cerrarModal(m.id));
  }
});

// ── CONTROL DEL BOTÓN HAMBURGUESA
if (navToggle && navLinksContainer) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinksContainer.classList.toggle('open');
  });
}

// ── COLLAPSIBLE SECTIONS
(function () {
  const STORAGE_KEY = 'rr_sections_state';

  let state = {};
  try {
    state = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch (_) { state = {}; }

  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
  }

  document.querySelectorAll('section[id]').forEach(section => {
    const title = section.querySelector('.section-title');
    if (!title) return;

    const sectionId = section.id;

    // Envolver contenido en .section-body
    const body = document.createElement('div');
    body.className = 'section-body';
    [...section.children]
      .filter(el => el !== title)
      .forEach(el => body.appendChild(el));
    section.appendChild(body);

    // Icono indicador
    const icon = document.createElement('span');
    icon.className = 'section-toggle-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '▾';
    title.appendChild(icon);
    title.setAttribute('role', 'button');
    title.setAttribute('tabindex', '0');

    // Transición definida solo una vez, aquí
    body.style.transition = 'max-height 0.4s ease, opacity 0.35s ease';

    function collapse(instant = false) {
      // overflow SIEMPRE hidden para que el clip funcione
      body.style.overflow = 'hidden';
      body.style.opacity = '0';

      if (instant) {
        // Sin animación al cargar la página
        body.style.transition = 'none';
        body.style.maxHeight = '0px';
        // Reactiva transición en el siguiente ciclo
        requestAnimationFrame(() => {
          body.style.transition = 'max-height 0.4s ease, opacity 0.35s ease';
        });
      } else {
        // CLAVE: fijar valor concreto primero, luego dos RAF para que el
        // navegador registre el estado inicial antes de animar a 0
        body.style.maxHeight = body.scrollHeight + 'px';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            body.style.maxHeight = '0px';
          });
        });
      }

      section.classList.add('is-collapsed');
      title.setAttribute('aria-expanded', 'false');
      state[sectionId] = 'collapsed';
      saveState();
    }

    function expand() {
      body.style.overflow = 'hidden';
      body.style.opacity = '1';
      body.style.maxHeight = body.scrollHeight + 'px';
      section.classList.remove('is-collapsed');
      title.setAttribute('aria-expanded', 'true');

      // Tras la transición: liberar max-height para que el contenido
      // dinámico (iframes, etc.) no quede recortado
      body.addEventListener('transitionend', function onEnd(e) {
        if (e.propertyName !== 'max-height') return; // ignorar otros eventos
        if (!section.classList.contains('is-collapsed')) {
          body.style.maxHeight = 'none';
          body.style.overflow = '';
        }
        body.removeEventListener('transitionend', onEnd);
      });

      state[sectionId] = 'expanded';
      saveState();
    }

    function toggle() {
      section.classList.contains('is-collapsed') ? expand() : collapse();
    }

    // Estado inicial
    if (state[sectionId] === 'collapsed') {
      collapse(true);
    } else {
      body.style.maxHeight = 'none';
      body.style.opacity = '1';
      title.setAttribute('aria-expanded', 'true');
    }

    title.addEventListener('click', toggle);
    title.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
})();