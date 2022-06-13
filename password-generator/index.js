let pwdOne = document.getElementById("pwd-one")
let pwdTwo = document.getElementById("pwd-two")
let pwdThree = document.getElementById("pwd-three")
let pwdFour = document.getElementById("pwd-four")
let pwdBox = document.getElementById("pwd-box")
let pwd = ""
let charSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\"", "]","^", "_", "`", "{", "|", "}", "~", "\\"]

function genPwd() {
    pwd = ""
    let pwdLength = document.querySelector("input").value
    for (i = 0; i < pwdLength; i++) {    
        let ranNum = Math.floor( Math.random() * charSet.length)
        let genChar = charSet[ranNum]
        pwd += genChar
     }
     return pwd
}

function printPwd() {
     pwdOne.innerText = genPwd()
     pwdTwo.innerText = genPwd()
     pwdThree.innerText = genPwd()
     pwdFour.innerText = genPwd()
}


pwdBox.onclick = function() {
  document.execCommand("copy");
}

pwdBox.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", event.target.textContent);
    alert("You copied the password")
  }
})

function copyPwd() {
/* Select the text field */
pwdOne.select();
pwdOne.setSelectionRange(0, 99999); /* For mobile devices */

/* Copy the text inside the text field */
 navigator.clipboard.writeText(pwdOne.value);

 /* Alert the copied text */
 alert("Copied the text: " + pwdOne.value);
 }