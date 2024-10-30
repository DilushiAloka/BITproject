//CALLING NAME - EMPLOYEE FORM

textFullName.onchange = () => {
    console.log(textFullName.value);
    const fullNameValue = textFullName.value;

    // converting text to sentence case
    function titleCase(str) {
        let words = str.toLowerCase().split(' ');
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
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
};
