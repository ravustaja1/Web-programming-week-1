import "./styles.css";

const data = 'My notebook'

document.getElementById("my-button").onclick = function() {
  document.getElementById("printhere").innerHTML = data;
  console.log("Hello world")
};
