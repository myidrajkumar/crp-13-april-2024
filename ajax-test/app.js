let xhr = new XMLHttpRequest();
console.log(xhr.readyState);
console.log(xhr.status);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    document.write("All done");
    console.log(xhr.readyState, xhr.status);
    let data = JSON.parse(xhr.responseText)[0];
    console.log(data);
    document.write(JSON.stringify(data));
  }
};

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send();
