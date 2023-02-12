let checkButton = document.getElementById("check");
checkButton.addEventListener("click", check);

let answer = document.getElementById("answ");

function check() {
  let filename = document.getElementById("filename").value;
  let reg = /^[A-Za-z].+\.(jpg|png|gif)/;

  if (reg.test(filename)) {
    answer.innerHTML = "Correct.";
  } else {
    answer.innerHTML = "Not correct!";
  }
}
