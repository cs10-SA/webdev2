// Landing Page
// Event Listener on Ham icon
document.getElementById("ham-icon").addEventListener("click", hamIconClicked);

function hamIconClicked() {
  // Get current display setting
  let displaySetting = document.getElementById("settings-div").style.display;
  // test currecnt display setting
  if (displaySetting === "none") {
    document.getElementById("settings-div").style.display = "block";
  } else {
    document.getElementById("settings-div").style.display = "none";
  }
}

// Name input
document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {
  let name = document.getElementById("name-in").value;
  let focus = document.getElementById("focus-in").value;
  let background = document.getElementById("background-select").value;
  let sunset = document.getElementById("sun").value;
  let beach = document.getElementById("rocky-beach").value;
  let starry = document.getElementById("star").value;
  let msg = `${name}`;
  let msg2 = `${focus}`;
  document.getElementById("name-out").innerHTML = msg;
  document.getElementById("focus-out").innerHTML = msg2;
  if (background === sunset) {
    document.body.style.background =
      "url('img/sunset.jpg') no-repeat center fixed";
    document.body.style.backgroundSize = "cover";
  } else if (background === beach) {
    document.body.style.background =
      "url('img/beach.jpg') no-repeat center fixed";
    document.body.style.backgroundSize = "cover";
  } else if (background === starry) {
    document.body.style.background =
      "url('img/starr.jpg') no-repeat center fixed";
    document.body.style.backgroundSize = "cover";
  }
}
document.getElementById("quote-btn").addEventListener("click", quotebtnClicked);
function quotebtnClicked() {
  let randNum = Math.random();
  if (randNum < 0.25) {
    document.getElementById(
      "quote-out"
    ).innerHTML = `<p> The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela </p>`;
  } else if (randNum < 0.5) {
    document.getElementById(
      "quote-out"
    ).innerHTML = `<p> Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. -Martin Luther King Jr.</p>`;
  } else if (randNum < 0.75) {
    document.getElementById(
      "quote-out"
    ).innerHTML = `<p>It is during our darkest moments that we must focus to see the light. -Aristotle </p>`;
  } else {
    document.getElementById(
      "quote-out"
    ).innerHTML = `<p> "You will face many defeats in life, but never let yourself be defeated." -Maya Angelou</p>`;
  }
}
