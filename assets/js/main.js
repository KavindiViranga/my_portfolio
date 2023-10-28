/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */

  window.onscroll = function() {headerShadow()};
  function headerShadow() {
    const navHeader =document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }
  
/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Front-End Developer","UI/UX Designer","Mobile App Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 100,
    backDelay : 950
 })
/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })
/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 50})
/* -- HEADINGS -- */
sr.reveal('.top-header',{})
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }  else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzS6YMrR5t6LgvJfveB1r05Olo2683sspWB3dnPqL_r7zT3enUzrtJtxlTA_H28xS3X/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg=document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault();
          const emailField = form.querySelector('[name="Email"]'); // Replace "email" with the actual name or id of your email input field // Assuming you have an element with the id "message" for displaying messages
      
          if (emailField.value.trim() === '') {
              msg.innerHTML = "Please enter your email"; // Display an error message
          } else {
              fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                  .then(response => {
                      msg.innerHTML = "Message sent successfully";
                      setTimeout(function () {
                          msg.innerHTML = "";
                          form.reset(); // Clear the form after a successful submission
                      }, 3000);
                  })
                  .catch(error => console.error('Error!', error.message));
          }
      });


window.addEventListener('scroll', scrollActive)

