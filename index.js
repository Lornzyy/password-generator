const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPasswordEl = document.getElementById("first-password");
let secondPasswordEl = document.getElementById("second-password");
//let passwordLengthEl = document.getElementById("password-length").value;

//alert(passwordLengthEl);
let charactersLength = 8;

function generatePassword(){
    //let rand = Math.floor(Math.random() * characters.length);
    //let rand2 = Math.floor(Math.random() * characters.length);
    let passwordOne = "";
    let passwordTwo = "";
    
    for (let i = 0; i < charactersLength; i++){
        
        let rand = Math.floor(Math.random() * characters.length);
        let rand2 = Math.floor(Math.random() * characters.length);

        passwordOne += characters[rand];
        passwordTwo += characters[rand2];
        
    }
    firstPasswordEl.textContent = passwordOne;
    secondPasswordEl.textContent = passwordTwo;

}