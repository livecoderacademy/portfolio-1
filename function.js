

// when user scrolls down then show go to Top button::START

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// when user scrolls down then show go to Top button::END




// WhatsApp, Telegram Chat ::START

// Optional JavaScript for interactivity, like tracking button clicks
document.querySelectorAll('.whatsapp-button').forEach(button => {
    button.addEventListener('click', function() {
      console.log(`Clicked on: ${this.getAttribute('data-button')}`);
      // Add additional logic if needed
    });
  });

// WhatsApp, Telegram Chat ::END



// CONTACT SECTION Message ::START
//Access form
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector("#submit_btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");
const phoneInput = document.querySelector("#user_phone");
const subjectInput = document.querySelector("#user_subject");

//Get needed data from emailJS
const publicKey = "HsrtqgkYNvq0qwY49";
const serviceID = "service_5szmye8";
const templateID = "template_mm5b4xq";

// Initialize emailJS with publicKey
emailjs.init(publicKey);

//Add submit event to the form

contactForm.addEventListener("submit", e => {
    //prevent form default behaviour
    e.preventDefault();
    //change button text
    submitBtn.innerText = "Just A Moment";
    //Get all input field values
    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        subject: subjectInput.value,
        message: messageInput.value
    }

    //sent email(add service,template id and input field values)
    emailjs.send(serviceID, templateID, inputFields).then(() => {
        // change button text
        submitBtn.innerText = "Message  Sent Successfully"
        // clear out all input fields
        nameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        subjectInput.value = "";
        messageInput.value = "";

        //Button Text automatically change after 9seconds for sending message successfully
        const myTimeout = setTimeout(myGreeting, 15000);
        function myGreeting() {
            document.getElementById("submit_btn").innerHTML = "Submit"
        }

    }, (error) => {
        //console log the error
        console.log(error);
        // change button text
        submitBtn.innerText = "Something went Wrong"
    });
});

// CONTACT SECTION Message ::END



//  For MOBILE Design:: navbar hide and show three bar::START

var mainListDiv = document.getElementById("mainListDiv"),
mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {

    "use strict";

    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");

};

// For MOBILE Design:: navbar hide and show three bar::END




//ACHIVEMENT SECTION::START
//Access images
let slideImages = document.querySelectorAll('.achivement_img');
//access next buttons
let next = document.querySelector('.next');
//Access prev buttons
let prev = document.querySelector('.prev');
//Access dot indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

//code for next buttons
next.addEventListener('click', slideNext);
function slideNext() {
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if (counter >= slideImages.length - 1) {

        counter = 0;
    } else {
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    dotsLabel();
};

//code for prev buttons
prev.addEventListener('click', slidePrev);
function slidePrev() {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if (counter == 0) {

        counter = slideImages.length - 1;
    } else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    dotsLabel();
};

//auto sliding
function autoSliding() {
    deleteInterval = setInterval(timer, 2000);
    function timer() {
        slideNext();
        dotsLabel();
    }
}
autoSliding();


//stop auto sliding when mouse is over

const mainContainer = document.querySelector('.slide_container');
mainContainer.addEventListener('mouseover', function () {
    clearInterval(deleteInterval);
});
//Resume autosliding when mouse is out

mainContainer.addEventListener("mouseleave", autoSliding);

//add and remove active class from indicators

function dotsLabel() {
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('achivement_active', '');
    }
    dots[counter].className += ' achivement_active';
}
// ACHIVEMENT SECTION::END




