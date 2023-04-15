/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    var result = arr.map(function (element, index) {
        if(arr[index].profession === "developer"){
            return element
        }
    });
    console.log(result)
}

function PrintDeveloperbyForEach() {
  const copy = [];
    arr.forEach(function (element, index, arr) {
        if(arr[index].profession === "developer"){
            copy.push(element);
        }
        
    });
    console.log(copy);
}

function addData() {
  arr.push({id: 4,name: "susan",age: "20",profession: "intern"});
   console.log(arr);
}

function removeAdmin() {
  arr = arr.filter(function(element, i, arr) {
        if(arr[i].profession !== "admin"){
            return element
        }
    })

    console.log(arr)
}

function concatenateArray() {
  let arr2 = [
        { id: 5, name: "Sohan", age: "13", profession: "principal" },
        { id: 6, name: "Mohan", age: "14", profession: "professor" },
        { id: 7, name: "Rohan", age: "15", profession: "student" },];
    console.log(arr.concat(arr2));
}
