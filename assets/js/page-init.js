/* Page-specific initialisation for the separate StudySpace HTML pages. */
document.addEventListener('DOMContentLoaded', () => {
  if (!currentUser) {
    location.replace('login.html');
    return;
  }

  const page = location.pathname.split('/').pop().replace('.html', '');

  // Each page has its own HTML file and a matching page section. The section
  // was accidentally left with Bootstrap's d-none class, hiding all content.
  const pageSection = document.getElementById(`page-${page}`);
  if (pageSection) pageSection.classList.remove('d-none');

  // Highlight the current page in the sidebar.
  document.querySelectorAll('.side-nav a[data-page]').forEach(link => {
    const isCurrent = link.dataset.page === page;
    link.classList.toggle('active', isCurrent);
    if (isCurrent) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  const name = document.getElementById('topName');
  if (name) name.textContent = currentUser.name;

  const avatar = document.getElementById('topAvatar');
  if (avatar) {
    avatar.textContent = currentUser.name
      .split(' ')
      .map(part => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  if (page === 'dashboard') {
    const heading = document.getElementById('welcomeHeading');
    if (heading) {
      heading.innerHTML = `Welcome back, ${escapeHTML(currentUser.name.split(' ')[0])} <span>✦</span>`;
    }
    updateDashboard();
  }

  if (page === 'rooms') renderRooms();
  if (page === 'bookings') renderBookings();
  if (page === 'students') renderStudents();
  if (page === 'reports') renderReports();
});
