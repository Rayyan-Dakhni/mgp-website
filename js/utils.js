"use strict";

// import "https://smtpjs.com/v3/smtp.js";

emailjs.init({
  publicKey: "qh6KJB-9llaccYp8P",
});

const contactForm = document.querySelector("#query-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // getting field values
  const name = document.querySelector("#query-name").value;
  const email = document.querySelector("#query-email").value;
  const phone = document.querySelector("#query-phone").value;
  const product = document.querySelector("#query-product").value;
  const note = document.querySelector("#query-note").value;

  const templateParams = {
    name: name,
    email: email,
    phone: phone,
    product: product,
    note: note,
  };

  emailjs.send("service_zzbedg4", "template_0w4zhtq", templateParams).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);

      contactForm.style.display = "none";
      document.querySelector("#confirmation-box").style.display = "block";
    },
    (error) => {
      console.log("FAILED...", error);
      alert(
        "Something went wrong, Your query was not able to process, Please try again."
      );
    }
  );
});