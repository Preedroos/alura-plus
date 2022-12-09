const sections = document.querySelectorAll('.scroll-reveal-x');
sections.forEach((section, index) => {
  if (index % 2 === 0) {
    ScrollReveal({
      origin: 'right',
      distance: '40px',
      duration: 1500,
      viewFactor: 0.5,
    }).reveal(section);
  } else {
    ScrollReveal({
      origin: 'left',
      distance: '40px',
      duration: 1500,
      viewFactor: 0.5,
    }).reveal(section);
  }
});

const devices = document.querySelectorAll('.scroll-reveal-y');
devices.forEach((device, index) => {
  ScrollReveal({
    origin: 'bottom',
    distance: '40px',
    duration: 1500,
    delay: 200 + 400 * index,
  }).reveal(device);
});
