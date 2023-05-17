function changeTheme() {
  let body = document.querySelector("body");

  // body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}
let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

function joinClub() {
  alert("Welcome! We are so happy that you want to join our club!");
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  let games = prompt("Have you played videogames before?");

  games = games.toLowerCase().trim();

  if (games === "no") {
    alert(
      "Hello " +
        name +
        "! You will play new games with us! We'll be in touch through your email " +
        email +
        " 👾"
    );
  } else if (games === "yes") {
    alert(
      "Hello " +
        name +
        "! You sure have some videogames you can recommend to us! We'll be in touch through your email " +
        email +
        " 👾"
    );
  } else {
    alert(
      "Hello " +
        name +
        "! Welcome to the gamer community! We'll be in touch through your email " +
        email +
        " 👾"
    );
  }
}

let joinButton = document.querySelector(".join-community");
joinButton.addEventListener("click", joinClub);
