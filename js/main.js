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

});
