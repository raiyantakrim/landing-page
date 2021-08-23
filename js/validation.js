const form = document.forms["subscriptionForm"];
// console.log(form);
const emailField = document.querySelector("#email");
const submitBtn = document.querySelector(".btn");
const errorMessage = document.querySelector(".errorMessage");
console.log(errorMessage);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailField.value;
  if (!email) {
    errorMessage.classList.remove("hide");
    errorMessage.textContent = "Please Fill out this field";
    emailField.classList.add("invalidInputField");
    emailField.focus();
  } else if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      String(email).toLowerCase()
    )
  ) {
    // alert("valid");
    errorMessage.classList.add("hide");
    emailField.classList.remove("invalidInputField");
    emailField.value = "";
  } else {
    errorMessage.classList.remove("hide");
    errorMessage.textContent = "Invalid Email Address";
    emailField.classList.add("invalidInputField");
    emailField.focus();
  }
});
