var thenum = fooFunc();

function fooFunc() {
  return Math.floor((Math.random()*10)+1);
}

function getInput() {
  var test = document.getElementById('userinput').value;
  checkInput(thenum, test);
  document.getElementById('userinput').value = "";
}

function checkInput(thenum, inputx) {
  var temp = document.getElementById("foo");
  if (inputx == thenum) {
    temp.style.backgroundColor = "#dbf6ad";
    temp.innerHTML = "Correct!";
  } else {
    temp.style.backgroundColor = "#f8c4c4";
    temp.innerHTML = "Incorrect.";
    //window.setTimeout(failFunc, 1000)
  }
}

//TODO: Have something happen when the user fails.
function failFunc() {
  window.location.href = "http://www.google.ca";
}

window.onload = function(){}
