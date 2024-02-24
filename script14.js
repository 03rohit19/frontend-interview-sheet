// Higher order function : A function which takes another function as an argument and uses it to operate some data and returns a function. Higher order function are meant to abstract some operation that perform repeatedly.For example map,forEach,filter and reduce.
// Imperative way to
let arr = ["rohit", "ram", "tempo"];
let arr1 = ["rahul", "dravid", "sachin"];

function convert(res) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(res[i].toUpperCase());
  }
  return result;
}
console.log(convert(arr));
// Use map
function convertThroughMap(res) {
  let result1 = [];
  res.map((x) => result1.push(x.toUpperCase()));
  return result1;
}
console.log(convertThroughMap(arr1));

// Null operator : It represents no value and it is completely different from undefined.Whenever you want to check the null value always use strict equality operator.

var foo = null;
console.log(foo === null);
console.log(typeof foo === "object");
console.log(foo === undefined);

// cookie,session storage and local storage : All the above technologies are key-value storage mechanism on the client side. They are only able to store value in the form of strings.
