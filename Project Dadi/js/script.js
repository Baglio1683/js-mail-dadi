const mynumb = Math.floor((Math.random() * 6)  + 1);

const numbPc = Math.floor((Math.random() * 6)  + 1);

alert("il tuo numero è " + mynumb);
alert("il numero del PC è " + numbPc);

if(mynumb > numbPc){
    alert("Sei Il Vincitore !!!");
}
else if( mynumb < numbPc){
    alert("Hai Perso AHAHHAHA, Riprova la fortuna");
}
else{
    alert("Pareggio");
}

   