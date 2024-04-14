let url = "https://randomuser.me/api";

fetch(url)
  .then((response) => response.json())
  .then(function (data) {
    let user = data.results[0];

    let li = document.createElement("li");
    let img = document.createElement("img");
    let p = document.createElement("p");

    img.src = user.picture.large;
    p.innerHTML = `${user.name.first} ${user.name.last}`;

    li.appendChild(img);
    li.appendChild(p);

    document.getElementById("user").appendChild(li);
  })
  .catch((error) => console.log("Error", error));
