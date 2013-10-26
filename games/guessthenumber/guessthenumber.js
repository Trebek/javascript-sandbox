var thenum = fooFunc()

function fooFunc() {
    return Math.floor((Math.random()*10)+1);
}

function getInput() {
    var temp = document.getElementById("foo");
    var test = document.getElementById('userinput').value;
    checkInput(thenum, test)
    //temp.innerHTML = test;
    document.getElementById('userinput').value = "";
}

function checkInput(thenum, inputx) {
    var temp = document.getElementById("foo");
    if (inputx == "Rad") {
        temp.innerHTML = "<b>You submitted some rad shit!</b>";
    } else if (inputx == thenum) {
        temp.innerHTML = "You're correct!";
    } else {
        temp.innerHTML = "Incorrect.";
    }
}

window.onload=function(){
    
}
