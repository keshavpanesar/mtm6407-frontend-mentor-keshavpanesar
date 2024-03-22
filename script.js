const hamburgerButtons = document.querySelector('.hamburger-buttons');
const desktopButtons = document.querySelector('.desktop-buttons');
const mobileMenuBtn = document.querySelector(".navbar-toggler");

mobileMenuBtn.addEventListener("click", () => {
  const loginBtn = document.querySelector('.hamburger-buttons .transparent-btns');
  const registerBtn = document.querySelector('.hamburger-buttons .black-btns');
  
  if (window.innerWidth <= 992) { // Only execute on mobile screens (992px and below)
    loginBtn.classList.toggle("d-none");
    registerBtn.classList.toggle("d-none");
  }
});


  // Function to handle media query change
  const handleMediaChange = (mediaQuery) => {
    const heroImage = document.querySelector('.hero-image');
    if (mediaQuery.matches) {
      // Add margin-left of 5rem for desktop view
      heroImage.style.marginLeft = '5rem';
    } else {
      // Remove margin-left for mobile view
      heroImage.style.marginLeft = '0';
    }
  };

  // Create a media query for desktop view (min-width: 992px)
  const mediaQuery = window.matchMedia('(min-width: 992px)');

  // Call the function initially
  handleMediaChange(mediaQuery);

  // Add event listener for media query change
  mediaQuery.addListener(handleMediaChange);

