const myimage = document.querySelector("img");

myimage.addEventListener("click", () => {
  const mysrc = myimage.getAttribute("src");
  if (mysrc === "images/luffy.png") {
    myimage.setAttribute("src", "images/noice.jpg");
  } else if (mysrc === "images/noice.jpg") {
    myimage.setAttribute("src", "images/luffy.png");
  }
});

const mybutton = document.querySelector("button");
const myheading = document.querySelector("h1");

function setusername() {
  const myname = prompt("enter your name dear sir: ");
  localStorage.setItem("name", myname);
}

myheading.addEventListener("click", () => {
  if (myheading.textContent === "Warrior of Liberation") {
    myheading.textContent = "Welcome, " + localStorage.getItem("name");
  } else if (
    myheading.textContent ===
    "Welcome, " + localStorage.getItem("name")
  ) {
    myheading.textContent = "Warrior of Liberation";
  }
});

if (!localStorage.getItem("name")) {
  setusername();
  if (!localStorage.getItem("name")) {
    print("no name set, try again!");
    setusername();
  }
}

mybutton.addEventListener("click", () => {
  setusername();
  if (!localStorage.getItem("name")) {
    print("no name set, try again!");
    setusername();
  }
});
