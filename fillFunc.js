//common function for filling data into select elements

const fillDataToDropdown = (parentId, message, dataList, property) => {
    parentId.innerHTML ="";

    let optionMsg = document.createElement("option");
    optionMsg.value="";
    optionMsg.innerText = message;
    optionMsg.selected = "selected";
    optionMsg.disabled = "disabled";
    parentId.appendChild(optionMsg);
  
    dataList.forEach((dataOb) => {
      let option = document.createElement("option");
      option.value=JSON.stringify(dataOb); //convert a value to a js object
      option.innerText = dataOb[property];
      parentId.appendChild(option);
    });
  };

  