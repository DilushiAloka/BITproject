let employees = [
  {
    id: "emp001",
    fullname: "Kamal Perera",
    callingname: "Kamal",
    NIC: "200257603179",
    gender: "Male",
    dob: "2002-03-29",
    address: "No:25,Mainstreet,Negombo",
    email: "kmak@gmail.com",
    contactno: "0719514100",
    civilstatus: "married",
    designation_id: { id: 1, name: "manager" },
    empstatus_id: { id: 1, name: "active" },
  },
  {
    id: "emp002",
    fullname: "Dilushi Aloka",
    callingname: "Dilushi",
    NIC: "200257603589",
    gender: "Female",
    dob: "2002-04-12",
    address: "No:45,Mainstreet,Negombo",
    email: "dilushi@gmail.com",
    contactno: "0779685425",
    civilstatus: "single",
    designation_id: { id: 1, name: "accountant" },
    empstatus_id: { id: 1, name: "active" },
  },
];

employeeTableBody.innerHTML = "";
employees.forEach((dataOb, index) => {
  let tr = document.createElement("tr");

  // let tdIndex = document.createElement("td");
  // tdIndex.innerText = parseInt(index) + 1;
  // tr.appendChild(tdIndex);

  let tdEmpId = document.createElement("td");
  tdEmpId.innerText = dataOb.id;
  tr.appendChild(tdEmpId);

  let tdFullName = document.createElement("td");
  tdFullName.innerText = dataOb.fullname;
  tr.appendChild(tdFullName);

  let tdCallingName = document.createElement("td");
  tdCallingName.innerText = dataOb.callingname;
  tr.appendChild(tdCallingName);

  let tdNic = document.createElement("td");
  tdNic.innerText = dataOb.NIC;
  tr.appendChild(tdNic);

  let tdGender = document.createElement("td");
  tdGender.innerText = dataOb.gender;
  tr.appendChild(tdGender);

  let tdDob = document.createElement("td");
  tdDob.innerText = dataOb.dob;
  tr.appendChild(tdDob);

  let tdAddress = document.createElement("td");
  tdAddress.innerText = dataOb.address;
  tr.appendChild(tdAddress);

  let tdEmail = document.createElement("td");
  tdEmail.innerText = dataOb.email;
  tr.appendChild(tdEmail);

  let tdContactNo = document.createElement("td");
  tdContactNo.innerText = dataOb.contactno;
  tr.appendChild(tdContactNo);

  let tdCivilstatus = document.createElement("td");
  tdCivilstatus.innerText = dataOb.civilstatus;
  tr.appendChild(tdCivilstatus);

  let tdDesignation = document.createElement("td");
  tdDesignation.innerText = dataOb.designation_id.name;
  tr.appendChild(tdDesignation);

  let tdStatus = document.createElement("td");
  tdStatus.innerText = dataOb.empstatus_id.name;
  tr.appendChild(tdStatus);
  let tdbuttons = document.createElement("td");

  let buttonView = document.createElement("button");
  buttonView.className = "options-btn";
  buttonView.innerHTML =
    "<i class='fa-solid fa-eye' style='color: #071731;'></i>";
  tdbuttons.appendChild(buttonView);

  let buttonUpdate = document.createElement("button");
  buttonUpdate.className = "options-btn";
  buttonUpdate.innerHTML =
    "<i class='fa-solid fa-pen-to-square'style='color: #089131;'></i>";
  tdbuttons.appendChild(buttonUpdate);

  let buttonDelete = document.createElement("button");
  buttonDelete.className = "options-btn";
  buttonDelete.innerHTML =
    "<i class='fa-solid fa-trash-can' style='color: #fd0d0d;'></i>";
  tdbuttons.appendChild(buttonDelete);
  tr.appendChild(tdbuttons);
  employeeTableBody.appendChild(tr);
});

// //form submit event fuction
// const buttonEmpSunmit =() =>{
// refreshEmpTable();
// }

// //form update event fuction
// const buttonEmpUpdate =() =>{
// refreshEmpTable();
// }

// //form delete event fuction
// const buttonEmpDelete =() =>{
// refreshEmpTable();
// }




//****************************************************************************************************************** */

//FULL NAME VALIDATION

textFullName.addEventListener("keyup", () => {
  const fullNameValue = textFullName.value;
  const regPattern = new RegExp("^([a-z]{2,20}[ ])+([a-z]{2,10})$");

  if (regPattern.test(fullNameValue)) {
    
    //bootstrap validation
    textFullName.classList.remove("is-invalid");
    textFullName.classList.add ("is-valid");

    // converting text to sentence case
    function titleCase(str) {
      let words = str.toLowerCase().split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
      return words.join(" ");
    }

    const fullName = titleCase(fullNameValue);
    const fullNameParts = fullName.split(" ");

    // Remove duplicates

    for (const index in fullNameParts) {
      for (let ind = parseInt(index) + 1; ind < fullNameParts.length; ind++) {
        if (fullNameParts[index] == fullNameParts[ind])
          fullNameParts.splice(ind, 1);
      }
    }

    //********generating calling name***********

    selectCallingName.innerHTML = "";

    let optionMsg = document.createElement("option");
    optionMsg.innerHTML = "Select Calling Name";
    optionMsg.selected = "selected";
    optionMsg.disabled = "disabled";
    selectCallingName.appendChild(optionMsg);

    fullNameParts.forEach((part, index) => {
      console.log(part); //display the parts in the name
      if (part.length > 2) {
        const option = document.createElement("option");

        option.innerHTML = part;
        selectCallingName.appendChild(option);
      }
    });
  } else {
    //bootstrap validation
    textFullName.classList.add ("is-invalid");
    textFullName.classList.remove ("is-valid");
  }
});





//***************************************************************************************************************** */
//NIC VALIDATION
textNic.addEventListener("keyup", () => {
  const textNicValue = textNic.value;
const idRegEx = new RegExp("^([0-9]{9}[Vv])|([1][9]|[2][0][0-9]{10})$");
if (idRegEx.test(textNicValue)) {
  
  //bootstrap validation
  textNic.classList.remove("is-invalid");
  textNic.classList.add ("is-valid");

  //******GENERATE GENDER*******

  let nicPart="";
  if(textNicValue.length==10){
nicPart=textNicValue.substring(2,5);
  }
  else{
    nicPart=textNicValue.substring(4,7);
  }

if(parseInt(nicPart)>500){
  radioFemale.checked=true;
}else{
  radioMale.checked=true;
}

  /********GENERATING DOB************* */

  if(textNicValue.length==10){

  }
  else{
    
  }



} else {
  //bootstrap validation
  textNic.classList.add ("is-invalid");
  textNic.classList.remove ("is-valid");
}
});




