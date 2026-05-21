// Custom Cursor
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('follower');
  let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX - 6 + 'px';
    cursor.style.top = mouseY - 6 + 'px';
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX - 18 + 'px';
    follower.style.top = followerY - 18 + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2)';
      follower.style.transform = 'scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      follower.style.transform = 'scale(1)';
    });
  });

  // Scroll Reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // Skill Bar Animation
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
      }
    });
  }, { threshold: 0.3 });
  document.querySelector('.skills-grid') && skillObserver.observe(document.querySelector('.skills-grid'));