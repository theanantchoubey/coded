// Adding backgroundColor Changing Effect 
let list = document.querySelectorAll('.resources li');
let bg = document.querySelector('.resources');
list.forEach(elements => {
  elements.addEventListener('mouseenter', function (event) {
    bg.style.backgroundColor = '#0958d0';
  });

  elements.addEventListener('mouseleave', function (event) {
    bg.style.backgroundColor = '#0d6efd';
  });
});

// Adding Tilt Effect 
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 15,
  glare: true,
  "max-glare": 0.3,
  speed: 400
});

// INITIALIZIN TOOLTIPS 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));