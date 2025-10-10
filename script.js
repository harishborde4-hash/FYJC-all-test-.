document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  const navButtons = document.querySelectorAll('.nav-btn');
  const closeSidebarBtn = document.getElementById('closeSidebar');
  const frame = document.getElementById('contentFrame');
  const appTitle = document.getElementById('appTitle');
  const subTitle = document.getElementById('subTitle');
  const openExternal = document.getElementById('openExternal');
  const refreshBtn = document.getElementById('refreshBtn');

  const iframeOverlay = document.getElementById('iframeOverlay');
  const overlayOpen = document.getElementById('overlayOpen');
  const overlayRetry = document.getElementById('overlayRetry');

  let currentURL = frame.src;

  /* open/close sidebar (with aria updates) */
  function setSidebar(open) {
    if (open) {
      sidebar.classList.add('active');
      sidebar.setAttribute('aria-hidden', 'false');
      menuBtn.setAttribute('aria-expanded', 'true');
    } else {
      sidebar.classList.remove('active');
      sidebar.setAttribute('aria-hidden', 'true');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  }

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    setSidebar(!sidebar.classList.contains('active'));
  });

  closeSidebarBtn.addEventListener('click', () => setSidebar(false));

  // close sidebar when clicking outside
  document.addEventListener('click', (ev) => {
    if (sidebar.classList.contains('active')) {
      if (!sidebar.contains(ev.target) && !menuBtn.contains(ev.target)) setSidebar(false);
    }
  });

  // Esc closes sidebar
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setSidebar(false); });

  // Navigation buttons
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const url = btn.dataset.url;
      const title = btn.dataset.title || 'Page';
      loadPage(url, title);
    });
  });

  // load page into iframe with fade animation
  function loadPage(url, title) {
    setSidebar(false);
    iframeOverlay.hidden = true;
    frame.classList.add('fade');

    // small delay for animation
    setTimeout(() => {
      currentURL = url;
      frame.src = url;
      subTitle.textContent = title;
      // keep header title consistent
      appTitle.textContent = 'FYJC Portal';
    }, 260);
  }

  // iframe onload: remove fade
  frame.addEventListener('load', () => {
    // remove fade (smooth)
    frame.classList.remove('fade');

    // We can't always detect cross-origin blocks programmatically.
    // If content is blank because of blocking, user can use "Open externally" button.
    // Keep overlay hidden by default.
    iframeOverlay.hidden = true;
  });

  // open externally button
  openExternal.addEventListener('click', () => {
    window.open(currentURL, '_blank', 'noopener');
  });

  // refresh (reload) - do a safe reload by resetting src
  refreshBtn.addEventListener('click', () => {
    frame.classList.add('fade');
    setTimeout(() => {
      frame.src = currentURL;
    }, 180);
  });

  // overlay fallback actions (if user triggers it)
  if (overlayOpen && overlayRetry) {
    overlayOpen.addEventListener('click', () => window.open(currentURL, '_blank', 'noopener'));
    overlayRetry.addEventListener('click', () => {
      iframeOverlay.hidden = true;
      frame.classList.add('fade');
      setTimeout(() => { frame.src = currentURL; }, 200);
    });
  }

  // initial accessible state
  setSidebar(false);
});
