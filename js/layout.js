/* Demo Two — shared header & footer. Edit the menu here once.
   Links with data-soon show a "coming soon" toast (demo only). */
(function () {
  const S = 'href="#" data-soon';
  const a = (label, href) => `<a ${href ? `href="${href}"` : S}><i class="fa-solid fa-chevron-right"></i>${label}</a>`;

  const tiles = last => `
    <div class="mega-tiles">
      <a class="mega-tile" ${S}><i class="fa-solid fa-book-open"></i>Order a Prospectus</a>
      <a class="mega-tile" href="about.html"><i class="fa-solid fa-star"></i>Why Choose Meridian</a>
      <a class="mega-tile" ${S}><i class="fa-solid fa-building-columns"></i>Campus Tours</a>
      <a class="mega-tile" ${S}><i class="fa-solid fa-graduation-cap"></i>${last}</a>
    </div>`;

  const imgTile = (src, title, sub, href) => `
    <a class="mega-img" ${href ? `href="${href}"` : S}>
      <img src="${src}" alt="" loading="lazy">
      <span>${title}<small>${sub}</small></span>
    </a>`;

  const caret = '<i class="fa-solid fa-angle-down"></i>';

  const header = `
  <header class="site-header" id="siteHeader">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="logo navbar-brand" href="index.html">
          <span class="logo-icon"><i class="fa-solid fa-building-columns"></i></span>
          <span class="logo-text"><strong>MERIDIAN</strong><small>International Study Centre</small></span>
        </a>
        <div class="d-flex gap-2 d-lg-none">
          <button class="search-btn" data-search-open aria-label="Search"><i class="fa-solid fa-magnifying-glass"></i></button>
          <button class="search-btn" data-bs-toggle="collapse" data-bs-target="#nav2" aria-label="Menu"><i class="fa-solid fa-bars"></i></button>
        </div>
        <div class="collapse navbar-collapse" id="nav2">
          <ul class="navbar-nav ms-auto align-items-lg-center">
            <li class="nav-item dropdown dropdown-mega">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-nav="foundation">Foundation ${caret}</a>
              <div class="dropdown-menu mega-menu">
                ${tiles('Undergraduate Courses')}
                <div class="row g-4">
                  <div class="col-lg col-6 mega-col">
                    <h6>O' Level Equivalent FD</h6>${a('FD in Business')}${a('FD in Sports')}
                  </div>
                  <div class="col-lg col-6 mega-col">
                    <h6>A' Level Equivalent ND</h6>${a('ND in IT')}${a('ND in Business')}${a('ND in Sports')}
                  </div>
                  <div class="col-lg col-6 mega-col">
                    <h6>Uni Year 2 Equivalent HND</h6>${a('HND in Computing', 'course.html')}${a('HND in Business')}${a('HND in English Law')}${a('HND in Sports Science')}
                  </div>
                  <div class="col-lg col-6 mega-col">
                    <h6>Language Programme</h6>${a('English for Excellence')}${a('IELTS Preparation')}${a('English for Employment')}${a('Spoken English')}
                  </div>
                  <div class="col-lg-3">${imgTile('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=70', 'Admission Going On', 'Spring 2027 intake →', 'contact.html')}</div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown dropdown-mega">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Undergraduate ${caret}</a>
              <div class="dropdown-menu mega-menu">
                ${tiles('Foundation Courses')}
                <div class="row g-4">
                  <div class="col-lg-4 col-6 mega-col"><h6>Undergraduate Courses</h6>${a('BSc (Hons) Computing', 'course.html')}${a('BA (Hons) Business')}${a('LLB (Hons) Law')}</div>
                  <div class="col-lg-4 col-6 mega-col"><h6>Top-up Degrees</h6>${a('Computing Top-up')}${a('Business Top-up')}${a('Sports Top-up')}</div>
                  <div class="col-lg-4">${imgTile('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=70', 'Student Life Blog', 'Read more →')}</div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown dropdown-mega">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Postgraduate ${caret}</a>
              <div class="dropdown-menu mega-menu">
                ${tiles('Undergraduate Courses')}
                <div class="row g-4">
                  <div class="col-lg-4 col-6 mega-col"><h6>Postgraduate Courses</h6>${a('UK MBA')}${a('LLM in Commercial Law')}</div>
                  <div class="col-lg-4 col-6 mega-col"><h6>Information</h6>${a('Entry Requirements')}${a('Fees & Scholarships')}</div>
                  <div class="col-lg-4">${imgTile('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=70', 'Latest News', 'Read more →')}</div>
                </div>
              </div>
            </li>
            <li class="nav-item"><a class="nav-link" href="about.html" data-nav="about">Why Meridian</a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Students/Staff-Hubs ${caret}</a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><h6 class="dropdown-header">Students Hubs</h6></li>
                <li><a class="dropdown-item" ${S}><i class="fa-regular fa-calendar"></i> Class Schedules</a></li>
                <li><a class="dropdown-item" ${S}><i class="fa-solid fa-users"></i> Our Talent Pool</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><h6 class="dropdown-header">Students &amp; Staff</h6></li>
                <li><a class="dropdown-item" ${S}><i class="fa-solid fa-right-to-bracket"></i> Student Login</a></li>
                <li><a class="dropdown-item" ${S}><i class="fa-solid fa-id-badge"></i> Staff Login</a></li>
                <li><a class="dropdown-item" ${S}><i class="fa-regular fa-envelope"></i> Webmail</a></li>
              </ul>
            </li>
            <li class="nav-item"><a class="nav-link" href="contact.html" data-nav="contact">Contact</a></li>
            <li class="nav-item d-none d-lg-block ms-2"><button class="search-btn" data-search-open aria-label="Search"><i class="fa-solid fa-magnifying-glass"></i></button></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div class="search-overlay" id="searchOverlay">
    <button class="close" data-search-close aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
    <form onsubmit="event.preventDefault()"><input type="text" placeholder="Search courses, news, pages…" aria-label="Search"></form>
  </div>`;

  const footer = `
  <footer class="site-footer">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-4 col-md-6">
          <a class="logo mb-4" href="index.html">
            <span class="logo-icon"><i class="fa-solid fa-building-columns"></i></span>
            <span class="logo-text"><strong>MERIDIAN</strong><small>International Study Centre</small></span>
          </a>
          <ul class="list-unstyled f-contact mt-4 mb-0">
            <li><i class="fa-solid fa-location-dot"></i><span>House # 00, Road # 0, Demo Area,<br>Dhaka-1200, Bangladesh</span></li>
            <li><i class="fa-solid fa-phone"></i><span>+880 1700-000000, +880 1700-000001</span></li>
            <li><i class="fa-solid fa-envelope"></i><span>info@example.com</span></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6">
          <h5>Follow Meridian International</h5>
          <p>Stay updated with admissions, events and student news.</p>
          <div class="social">
            <a ${S} aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a ${S} aria-label="X"><i class="fa-brands fa-x-twitter"></i></a>
            <a ${S} aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a ${S} aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a ${S} aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
        <div class="col-lg-4">
          <h5>Quick Links</h5>
          <div class="row">
            <div class="col-6"><ul class="list-unstyled"><li class="py-1"><a href="about.html">About Us</a></li><li class="py-1"><a href="course.html">Courses</a></li><li class="py-1"><a ${S}>News</a></li></ul></div>
            <div class="col-6"><ul class="list-unstyled"><li class="py-1"><a href="contact.html">Contact</a></li><li class="py-1"><a ${S}>Careers</a></li><li class="py-1"><a ${S}>Privacy</a></li></ul></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container d-flex flex-column flex-md-row justify-content-between gap-1">
        <span>© <span data-year></span> Meridian International Study Centre. All rights reserved.</span>
        <span>In collaboration with Westbridge University &amp; Kingsford Awards (demo).</span>
      </div>
    </div>
  </footer>
  <button class="to-top" id="toTop" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>
  <div class="soon-toast" id="soonToast"><div class="inner"><i class="fa-solid fa-circle-info"></i><span>This page will be available in the full version.</span></div></div>`;

  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;

  const page = document.body.dataset.page;
  if (page) document.querySelectorAll(`[data-nav="${page}"]`).forEach(el => el.classList.add('active'));
})();
