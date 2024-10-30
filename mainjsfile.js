


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



  const fillDataIntoSelect = (parentId, message, dataList,property)=>{
    let optionMsg = document.createElement("option");
    optionMsg.innerText = "Select status";
    optionMsg.selected = "selected";
    optionMsg.disabled = "disabled";
    parentId.appendChild(optionMsg);
    
    dataList.forEach((dataOb) => {   
    let option = document.createElement("option");
    option.innerText = dataOb[property];
    parentId.appendChild(option);
            });
};


