
//FORM DATA AVAILABILITY VALIDATION

(function () {
    'use strict'
      var forms = document.querySelectorAll('.needs-validation')
      Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


/*********************************************************************************************************************** */


//CALLING NAME

textFullName.onchange = () => {
    console.log(textFullName.value);

    const fullNameValue = textFullName.value;
    const fullNameParts = fullNameValue.split(" ");
    console.log(fullNameParts);
    
    selectCallingName.innerHTML = "";

    let optionMsg = document.createElement("option");
    optionMsg.innerHTML = "Select Calling Name";
    optionMsg.selected = "selected";
    optionMsg.disabled = "disabled";
        selectCallingName.appendChild(optionMsg);

    
  fullNameParts.forEach((part, index) => {
    console.log(part); //display the parts in the name

    const option = document.createElement("option");

    option.innerHTML = part;
    selectCallingName.appendChild(option);
  });
};