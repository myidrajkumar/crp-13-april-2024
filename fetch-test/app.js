let url = "https://jsonplaceholder.typicode.com/todos";

fetch(url)
  .then((data) => data.json())
  .then((data) => console.log(data));
