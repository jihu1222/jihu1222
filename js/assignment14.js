// problem 1

let employees = {
  "members": [
    {
      "firstName": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "salary": "40000",
      "raiseEligible": "true",
    },
    {
      "firstName": "Mary",
      "department": "Finance",
      "designation": "Trainee",
      "salary": "18500",
      "raiseEligible": "true",
    },
    {
      "firstName": "Bill",
      "department": "HR",
      "designation": "Executive",
      "salary": "21200",
      "raiseEligible": "false",
    }
  ]
}

console.log(employees);

// problem 2

let company = {
  "companyName": "TechStars",
  "website": "www.techstars.site",
  "employees": employees.members,
}

console.log(company);

// problem 3

function addEmployee(obj, name, department, designation, salary, raise) {
  let newEmployee = {
    "firstName": name,
    "department": department,
    "designation": designation,
    "salary": salary,
    "raiseEligible": raise,
  }
  obj['members'].push(newEmployee);
}

addEmployee(employees, "Anna", "Tech", "Executive", "25600", "false");
company.employees = employees.members;

console.log(company);

// problem 4

var totalSalary = 0;

for(i = 0; i < company.employees.length; i++){
  totalSalary = totalSalary + Math.floor(company.employees[i].salary);
}

console.log(totalSalary);

// problem 5

function giveRaise(obj) {
  for(i = 0; i < obj.employees.length; i++){
    const currEmp = obj.employees[i];
    if (currEmp.raiseEligible == "true") {
      currEmp.salary = Math.floor(currEmp.salary) + Math.floor(currEmp.salary)*.10;
      currEmp.raiseEligible = false;
    }
  }
}

giveRaise(company);
console.log(company);

// problem 6

const workFromHome = ['Anna', 'Sam'];

function addWFH(obj, array) {
  for(i = 0; i < obj.employees.length; i++){
    if (obj.employees[i].firstName != workFromHome[0] && obj.employees[i].firstName != workFromHome[1]) {
    obj.employees[i].wfh = "false";
    }
    else {
      obj.employees[i].wfh = "true";
    }
  }
}

addWFH(company);
console.log(company);
