//common function for text field  data validation

const textElementValidator = (element, pattern) => {
  const regPattern = new RegExp(pattern);

  if (regPattern.test(element.value)) {
    //bootstrap validation
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");
  } else {
    //bootstrap validation
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
};

//common function for date field  data validation

const dateElementValidator = (element) => {
  element.classList.remove("is-invalid");
  element.classList.add("is-valid");
};


//common function for textarea notes  data validation

textareaNotes.addEventListener("keyup", () => {
  const notesValue = textareaNotes.value;
  const regPattern = new RegExp("^([a-zA-Z0-9]{2,20}[ ])+([a-z]{2,10})$");

  if (regPattern.test(textareaNotes.value)) {
    //bootstrap validation
    textareaNotes.classList.remove("is-invalid");
    textareaNotes.classList.add("is-valid");
  } else {
    //bootstrap validation
    textareaNotes.classList.add("is-invalid");
    textareaNotes.classList.remove("is-valid");
  }
});

