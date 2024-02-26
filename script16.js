// Throttling : It is a technique used in web development to control the rate at which the function is executed.It limits the maximum number of times a function can be called over a specified time interval.

// debounce example with search bar

const searchInput = document.getElementById("inputId");

function myDebounce(func, delay) {
  let timeOut;
  return function (...args) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const myFunction = (event) => {
  const querry = event.target.value;
  console.log("querry is :", querry);
};

searchInput.addEventListener("input", myDebounce(myFunction, 1000));
