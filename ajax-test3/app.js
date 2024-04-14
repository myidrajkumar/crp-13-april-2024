function requestListener() {
  let data = JSON.parse(this.responseText);
  console.log("Response received:", data);
  let user = data.results[0];
  console.log("User:", user);

  let fname = user.name.first;
  let lname = user.name.last;
  let src = user.picture.large;

  let li = document.createElement("li");
  let img = document.createElement("img");
  let p = document.createElement("p");

  img.src = src;
  p.innerHTML = `${fname} ${lname}`;
  document.getElementById("user").appendChild(li);

  li.appendChild(img);
  li.appendChild(p);
}

function errorListener() {
  console.log("Oops, Error occurred", this.error);
}

let url = "https://randomuser.me/api";
let method = "GET";

let xhr = new XMLHttpRequest();

xhr.open(method, url, true);

xhr.onload = requestListener;
xhr.onerror = errorListener;

xhr.send();
