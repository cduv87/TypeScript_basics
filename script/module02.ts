let x: number;   //* Explicitly declares x as a number type
let y = 1;       //* Implicitly declares y as a number type
let z;           //* Declares z without initializing it
x = 2
y = 6
z = y.toString();
console.log(z)
enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice
}

let employeeStatus : ContractStatus = ContractStatus.Temp
console.log(employeeStatus)
console.log(ContractStatus[employeeStatus]);
console.log(ContractStatus)