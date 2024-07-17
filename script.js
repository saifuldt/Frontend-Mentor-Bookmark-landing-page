//  TAB

$(function () {
  $("#tabs").tabs();
});

 

//   accordion

{const acc = document.getElementsByClassName("accordion");


for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}}


// email validator

const emailInput = document.getElementById('emailInput');
const errorMsg = document.getElementById('errorMsg');
const emailSubBtn = document.getElementById('emailSubBtn');

emailSubBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const emailValue = emailInput.value;

  if (!validateEmail(emailValue)) {
    errorMsg.style.display = "block";
    emailInput.style.border = "3px solid var(--SoftRed)";
  } else {
    errorMsg.style.display = "none";
    emailInput.style.border = "none";
    emailInput.value = '';
  }

})

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};


// menu for mobile

const logoHide = document.getElementById('logoHide');
const divHide = document.getElementById('divHide');
const closeMenu = document.getElementById('closeMenu');
const openMenu = document.getElementById('openMenu');

openMenu.addEventListener('click', ()=>{
  divHide.style.display = 'block';
  logoHide.style.display = 'none';
  openMenu.style.display = 'none';

})

closeMenu.addEventListener('click', ()=>{
  divHide.style.display = 'none';
  logoHide.style.display = 'block';
  openMenu.style.display = 'block';

})

