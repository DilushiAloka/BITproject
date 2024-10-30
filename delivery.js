
let courierServices = [{id:1, name:"Ceylon Express"}, {id:2, name:"City Pack"}];

let status = [{id:1, status:"Pickup Collected"}, {id:2, status:"Branch In"}];


fillDataIntoSelect( selectCourierService, "Select Courier Service", courierServices,"name");
fillDataIntoSelect( selectStatus, "Select Status", status,"status");



//define function to fill data dynamically into select (elementID, displaymsg, dataListname, displayPropertyName)

