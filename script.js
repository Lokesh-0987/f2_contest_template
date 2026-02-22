/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((emp) => {
	if(emp.profession === "developer"){
		console.log(emp);
	}
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((emp) => {
	if(emp.profession === "developer"){
		console.log(emp);
	}
  });
}

function addData() {
  //Write your code here, just console.log
  let newEmp = {
	  id : 4,
	  name : "Susan",
	  age : "20",
	  profession : "intern",
  };
  
  arr.push(newEmp);
  console.log(arr);
	  
}

function removeAdmin() {
  //Write your code here, just console.log
  let updatedArray = arr.filter(
	(emp) => emp.profession !== "admin"
	);
	console.log(updatedArray);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
	{id: 5, name: "Loki", age:"22", profession: "developer"},
	{id: 6, name: "Sandy", age:"25", profession: "admin"},
	{id: 7, name: "Pratap", age:"22", profession: "intern"},
  ];
  let combined = arr.concat(newArr);
  console.log(combined);
}
