// Write your solution in this file!
// show = console.log;

const employee= {
    name: "Sam"
};
// show(employee);

// --------- First section ---------
// add address to sam nondestructively


function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee}; //Spread operator
    newObj[key] = value;
    return newObj;
}
addAddress = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");
// show(addAddress);


// --------- Second section ---------
// change sam's address destructively


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
changeAddress = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
// show(changeAddress);

//--------- Third Section ---------

// delete nmae key after cloning a copy and leave original untouched

function deleteFromEmployeeByKey(employee, key){
   const newObj = {... employee};
   newObj[key];
   delete newObj[key];
   return newObj;
}
newEmployee = deleteFromEmployeeByKey(employee,'name');
// show(newEmployee);
// show(employee);


// --------- Fourth Section ---------


function destructivelyDeleteFromEmployeeByKey(employee, key){
    employee[key];
    delete employee[key];
    return employee
}
newEmployee = destructivelyDeleteFromEmployeeByKey(employee,'name');
// show(newEmployee);


