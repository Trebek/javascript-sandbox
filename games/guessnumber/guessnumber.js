var thenum = genRandomNum();

function genRandomNum() {
  return Math.floor((Math.random()*10)+1);
}

function getInput() {
  var test = document.getElementById('inputbox').value;
  checkInput(thenum, test);
  document.getElementById('inputbox').value = "";
}

function checkInput(thenum, inputx) {
  var temp = document.getElementById("txtbox");
  if (inputx == thenum) {
    temp.style.backgroundColor = "#DBF6AD";
    temp.innerHTML = "Correct!";
  } else {
    temp.style.backgroundColor = "#F8C4C4";
    temp.innerHTML = "Incorrect.";
    //window.setTimeout(failFunc, 1000)
  }
}

//TODO: Have something happen when the user fails.
function failFunc() {
  window.location.href = "http://www.google.ca";
}

window.onload = function(){}
