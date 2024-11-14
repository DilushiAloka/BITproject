let employees = [
  { id: "EMP1", name: "Kamal" },
  { id: "EMP2", name: "Sunil" },
  { id: "EMP3", name: "Amal" },
];

const fillDatatIntoTable = (tableBodyID, dataList) => {
  tableBodyID.innerHTML = "";

  dataList.forEach((dataOb, index) => {
    let tr = document.createElement("tr");

    let tdIndex = document.createElement("td");
    tdIndex.innerHTML = parseInt(index) + 1;
    tr.appendChild(tdIndex);

    let tdId = document.createElement("td");
    tdId.innerText = dataOb.id;
    tr.appendChild(tdId);

    let tdName = document.createElement("td");
    tdName.innerText = dataOb.name;
    tr.appendChild(tdName);

    let tdbuttons = document.createElement("td");

    let butttonView = document.createElement("button");
    butttonView.className = "btn";
    butttonView.innerHTML = "view";
    tdbuttons.appendChild(butttonView);

    let buttonUpdate = document.createElement("button");
    buttonUpdate.className = "btn";
    buttonUpdate.innerHTML = "update";
    tdbuttons.appendChild(butttonUpdate);

    let buttonDelete = document.createElement("button");
    buttonDelete.className = "btn";
    buttonDelete.innerHTML = "delete";
    tdbuttons.appendChild(butttonDelete);

    tr.appendChild(tdbuttons);
    tableBodyID.appendChild(tr);
  });
};
