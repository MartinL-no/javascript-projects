let pwdOne = document.getElementById("pwd-one")
let pwdTwo = document.getElementById("pwd-two")
let pwdThree = document.getElementById("pwd-three")
let pwdFour = document.getElementById("pwd-four")

let pwd = ""

let charSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\"", "]","^", "_", "`", "{", "|", "}", "~", "\\"]

function genPwd() {
    pwd = ""
    for (i = 0; i < 15; i++) {    
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