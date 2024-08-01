//random Pasword Generator
function generatePassword(){
    const length = document.getElementById("nof").value;
    const includeLowercase = document.getElementById("lower").checked;
    const includeUppercase = document.getElementById("upper").checked;
    const includeNumbers = document.getElementById("numm").checked;
    const includeSymbols = document.getElementById("sym").checked;
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbolChars = "!@#$%^&*()_+-=";
    const numberChars = "0123456789";
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase? lowercaseChars : "";
    allowedChars += includeUppercase? uppercaseChars : "";
    allowedChars += includeNumbers? numberChars : "";
    allowedChars += includeSymbols? symbolChars : "";
    if(length <= 0){
        return 'Password length must be at least 1';
    }
    for(let i=0 ; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password+=allowedChars[randomIndex]
    }

    //console.log(allowedChars);
    document.getElementById("pass").innerText=password;
    return password;
}


const pass = generatePassword();
console.log('Generated password : '+ pass)
