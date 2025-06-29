// Back To Top Button
let mybutton = document.getElementById("Back-To-Top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);
function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Hamburger Menu Section
const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  overlay.style.display = (overlay.style.display === 'flex') ? 'none' : 'flex';

  if (hamburger.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

const overlayLinks = document.querySelectorAll('.overlay-links a');
overlayLinks.forEach(link => {
  link.addEventListener('click', () => {
    overlay.style.display = 'none';
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Project Expand Section
document.addEventListener("DOMContentLoaded", function() {
const projects = document.querySelectorAll(".project");
projects.forEach(project => {
    project.addEventListener("click", function() {
        this.classList.toggle("expanded");
    });
  });
});

// Form Feedback Section
document.getElementById('fs-frm').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const form = event.target;
  const status = document.getElementById('form-status');

  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/mknlbraw", {
      method: "POST",
      headers: { 'Accept': 'application/json' },
      body: data
    });

    if (response.ok) {
      status.innerHTML = "<span style='color:green; font-weight:bolder;'>Thanks! Your message has been sent.</span>";
      form.reset();
    } else {
      const result = await response.json();
      status.innerHTML = "<span style='color:red; font-weight:bolder;'>Oops! " + (result.error || "There was a problem submitting your form.") + "</span>";
    }
  } catch (error) {
    status.innerHTML = "<span style='color:red; font-weight:bolder;'>Oops! There was a network error. Please try again.</span>";
  }
});

// Dynamic Space Section
  const formStatus = document.getElementById('form-status');
  const contactCard = document.querySelector('.contact-card');

  const observer = new MutationObserver(() => {
    if (formStatus.textContent.trim()) {
      contactCard.classList.add('no-bottom-padding');
    } else {
      contactCard.classList.remove('no-bottom-padding');
    }
  });

  observer.observe(formStatus, { childList: true, subtree: true });
