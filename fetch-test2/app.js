let customPost = {
  title: "Hello World",
  body: "This is my story........ blah blah",
  userId: 1,
};

let customHeaders = {
  "Content-Type": "application/json; charset=UTF-8",
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: customHeaders,
  body: JSON.stringify(customPost),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
