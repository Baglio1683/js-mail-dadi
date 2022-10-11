
const listEmail = ["alberto.baglivi@gmail.com" , "nuovoli22@gmail.com"]

const myemail = prompt("inserire la propria email: ")

let found = false 


for(let i = 0 ; i < listEmail.length ; i++){

if(listEmail[i] === myemail){
    found = true
}

}

if(found == true){
    alert("la tua email è stata trovata!!")
}

if(found == false){
    alert("la tua email non è stata trovata")
    listEmail.push(myemail)
    alert("la tua email è stata inserita nella lista")
    console.log(listEmail)
}

