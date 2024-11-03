let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passEl = document.getElementById("password-el")
let pass2El = document.getElementById("password2-el")
let pass3El = document.getElementById("password3-el")
let pass4El = document.getElementById("password4-el")

function genRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}
function generatePassword() {
    let randomPassword = ""
    let random2Password = ""
    for(i = 0; i < 15; i++) {
        randomPassword += genRandomCharacter()
        random2Password += genRandomCharacter()
        passEl.value = randomPassword
        pass2El.value = random2Password
    }
}
function generate2Password() {
    let random3Password = ""
    let random4Password = ""
    for(i = 0; i < 15; i++) {
        random3Password += genRandomCharacter()
        random4Password += genRandomCharacter()
        pass3El.value = random3Password
        pass4El.value = random4Password
    }
}
function copyPassword() {
    passEl.select()
    document.execCommand("copy") 
    alert("Password copied: " + passEl.value)
}
function copy2Password() {
    pass2El.select()
    document.execCommand("copy") 
    alert("Password copied: " + pass2El.value)
}
function copy3Password() {
    pass3El.select()
    document.execCommand("copy") 
    alert("Password copied: " + pass3El.value)
}
function copy4Password() {
    pass4El.select()
    document.execCommand("copy") 
    alert("Password copied: " + pass4El.value)
}