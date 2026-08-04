document.addEventListener('DOMContentLoaded', () => {
  // Navigation Tabs Interactivity
  const tabs = document.querySelectorAll('.nav-btn');
  const panels = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      // Remover activados
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      // Activar target
      const targetId = tab.getAttribute('data-target');
      tab.classList.add('active');
      document.getElementById(targetId).classList.add('active');

      // En mobile, cerrar menú después de click
      if (window.innerWidth <= 768) {
        document.getElementById('nav-tabs').classList.remove('show');
      }

      // Smooth scroll back to top if not already
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navTabsContainer = document.getElementById('nav-tabs');

  if(mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navTabsContainer.classList.toggle('show');
    });
  }

  // Contador de vistas del sitio (servicio externo abacus.jasoncameron.dev, sin backend propio).
  // Solo suma una vista por pestaña/sesión (sessionStorage); recargas dentro de la
  // misma sesión solo consultan el valor actual, no vuelven a sumar.
  const viewCountEl = document.getElementById('view-count');
  const viewCounterEl = document.getElementById('view-counter');

  if (viewCountEl) {
    const NAMESPACE = 'conacedum-com';
    const KEY = 'site-views';
    const alreadyCounted = sessionStorage.getItem('ncem-view-counted');
    const endpoint = alreadyCounted
      ? `https://abacus.jasoncameron.dev/get/${NAMESPACE}/${KEY}`
      : `https://abacus.jasoncameron.dev/hit/${NAMESPACE}/${KEY}`;

    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        viewCountEl.textContent = data.value.toLocaleString('es-CO');
        sessionStorage.setItem('ncem-view-counted', '1');
      })
      .catch(() => {
        // Servicio externo no disponible (o bloqueado por un adblocker):
        // se oculta el contador en vez de dejar un "···" roto.
        if (viewCounterEl) viewCounterEl.style.display = 'none';
      });
  }

});
