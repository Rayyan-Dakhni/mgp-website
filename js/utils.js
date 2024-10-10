"use strict";

// import "https://smtpjs.com/v3/smtp.js";

emailjs.init({
  publicKey: "B1ysZDH9MlIYYdFZT",
});

const contactForm = document.querySelector("#query-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // getting field values
  const name = document.querySelector("#query-name");
  const email = document.querySelector("#query-email");
  const phone = document.querySelector("#query-phone");
  const product = document.querySelector("#query-product");
  const note = document.querySelector("#query-note");

  const templateParams = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    product: product.value,
    note: note.value,
  };

  emailjs.send("service_5ofl591", "template_3ynybu9", templateParams).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);

      contactForm.style.display = "none";
      document.querySelector("#confirmation-box").style.display = "block";

      name.value = "";
      email.value = "";
      phone.value = "";
      product.value = "";
      note.value = "";
    },
    (error) => {
      console.log("FAILED...", error);
      alert(
        "Something went wrong, Your query was not able to process, Please try again."
      );
    }
  );
});

const refreshForm = document.querySelector("#refresh-form");

refreshForm.addEventListener("click", function (e) {
  document.querySelector("#confirmation-box").style.display = "none";
  contactForm.style.display = "block";
});
