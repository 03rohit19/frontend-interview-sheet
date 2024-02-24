// debounce function

// Debouncing is a technique used in programming to limit the rate at which a function is getting called. It ensures that a function is not called repeatedly in a short amount of time, but rather is called after a certain amount of time has passed since the last time it was called.

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function search(query) {
  console.log(`this is your typed query ${query}`);
}

const debouncedSearch = debounce(search, 300);
debouncedSearch("hello");
