let designationsArray=[{id:1, name:"owner"},{id:2, name:"manager"}, {id:3, name:"accountant"}];



//call the function in commonjs to fill the dropdown
fillDataToDropdown( selectDesignation, "Select Designation", designationsArray,"name");


//call the function in commonjs to fill the checkbox
const divCheckBox = document.querySelector(".divCheckBox");
fillDataToCheckBox(divCheckBox, designationsArray, "name");

//call the function in commonjs to fill the checkbox
const divRadio = document.querySelector(".divRadio");
fillDataToRadio(divRadio, designationsArray, "name");




