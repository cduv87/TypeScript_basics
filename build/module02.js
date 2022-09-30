"use strict";
let x; //* Explicitly declares x as a number type
let y = 1; //* Implicitly declares y as a number type
let z; //* Declares z without initializing it
x = 2;
y = 6;
z = y.toString();
console.log(z);
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
console.log(ContractStatus);
