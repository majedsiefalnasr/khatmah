document.addEventListener('DOMContentLoaded', function () {
  // Swiper
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 32,
      },
      1200: {
        slidesPerView: 3.2,
        spaceBetween: 48,
      },
    },
    grabCursor: true,
  });

  ////////////////////////////////////////////////////////////////
  // Sticky Navbar
  // Get the navbar element
  const navbar = document.getElementById('main_navbar');

  // Get the initial offset of the navbar
  const navbarOffset = navbar.offsetTop;

  // Get the initial width of the navbar
  var navbarWidth = navbar.clientWidth;

  // Add an event listener for the 'resize' event
  window.addEventListener('resize', () => {
    // Get the initial width of the navbar
    navbarWidth = navbar.clientWidth;
  });

  if (navbar) {
    // Listen for the scroll event on the window
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 120) {
        navbar.classList.add('sticky');
        navbar.style.width = navbarWidth + 'px'; // Set the width
      } else {
        navbar.classList.remove('sticky');
        navbar.style.width = ''; // Re-set the width
      }
    });
  }

  /////////////////////////////////////////////////////////////////////
  // HREF scroll
  // Function to scroll to the target with a specified ID
  function scrollToTarget(targetID, targetOffset) {
    const targetElement = document.getElementById(targetID);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - targetOffset,
        behavior: 'smooth', // Smooth scrolling animation
      });
    }
  }

  // Add click event listeners to elements with data-href attribute
  const elementsWithDataHref = document.querySelectorAll('[data-href]');

  elementsWithDataHref.forEach((element) => {
    const targetID = element.getAttribute('data-href');
    var targetOffset = element.getAttribute('data-offset');

    // Check if doesn't has offset attribute
    if (!targetOffset) targetOffset = 100;

    element.addEventListener('click', () => {
      scrollToTarget(targetID, targetOffset);
    });
  });

  /////////////////////////////////////////////////////////////////////
  // Send whatsapp message on submit
  const submitAction = document.querySelector('[data-submit]');

  if (submitAction) {
    const client_name = document.getElementById('client_name'),
      client_course = document.getElementById('client_course');

    // submitAction.addEventListener('click', () => {
    //   const form = document.getElementById('registrationForm');

    //   var rrr = 0;

    //   form.addEventListener('submit', function (event) {
    //     event.preventDefault();
    //     event.stopPropagation();

    //     form.classList.add('was-validated');

    //     if (form.checkValidity() === true) {
    //       console.log(rrr);

    //       window.open(
    //         `https://wa.me/201070604054?text=Hi, I'm ` +
    //           client_name.value +
    //           ` I'm interested in ` +
    //           client_course.value +
    //           ` cource`,
    //         '_blank',
    //       );

    //       rrr++;
    //     }
    //   });
    // });
  }
});

const client_name = document.getElementById('client_name'),
  client_course = document.getElementById('client_course');
function submitForm() {
  window.open(
    `https://wa.me/201070604054?text=Hi, I'm ` +
      client_name.value +
      ` I'm interested in ` +
      client_course.value +
      ` cource`,
    '_blank',
  );
}
