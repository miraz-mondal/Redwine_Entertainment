"use strict"
// Navbar
document.querySelector('.hamburger').addEventListener('click', (e) => {
  e.preventDefault();
  
  document.querySelector('.navigation').classList.toggle('active');
  
});
document.querySelector("#nav-close").addEventListener("click", () => {
   document.querySelector(".navigation").classList.remove("active");
});

// Contact
const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const companyNameEl = document.querySelector("#company-name");
const messageEl = document.querySelector("#message");

const form = document.querySelector("#submit-form");

function checkValidations() {
 let letters = /^[a-zA-Z\s]*$/;
 const name = nameEl.value.trim();
 const email = emailEl.value.trim();
 const companyName = companyNameEl.value.trim();
 const message = messageEl.value.trim();
 if (name === "") {
    document.querySelector(".name-error").classList.add("error");
     document.querySelector(".name-error").innerText =
       "Please fill out this field!";
 } else {
   if (!letters.test(name)) {
     document.querySelector(".name-error").classList.add("error");
     document.querySelector(".name-error").innerText =
       "Please enter only characters!";
   } else {
     
   }
 }
 if (email === "") {
    document.querySelector(".name-error").classList.add("error");
     document.querySelector(".name-error").innerText =
       "Please fill out this field!";
 } else {
   if (!letters.test(name)) {
     document.querySelector(".name-error").classList.add("error");
     document.querySelector(".name-error").innerText =
       "Please enter only characters!";
   } else {
     
   }
 }
}

function reset() {
 nameEl = "";
 emailEl = "";
 companyNameEl = "";
 messageEl = "";
 document.querySelector(".name-error").innerText = "";
}

// Back to top button
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
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

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);
function backToTop() {
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
}
