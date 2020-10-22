var listaMine = [] ;
var leMiePosizioni = [] ;
var numeroBombe = 16;
var maxBombe = 100;
var maxPoint = maxBombe - numeroBombe ;

while (listaMine.length) < 16) {
    var minaRandom = getRndInteger (1,100);
    //verifico se la bomba e gia presente nell array
    // la inserisco solo
    if (listaMine.includes(minaRandom)) {
        listaMine.push(minaRandom);
    }
}





console.log('lista mine : ' , listaMine);

var isBombaTrovata = false ;


do {
    var laMiaScelta = parseInt(prompt('inserisci un numero'));


    //verifico che LaMiaScelta non sia presente nell

    if (listaMine.includes(laMiaScelta == true)) {
        isBombaTrovata = true ;
        alert('hai perso, hai totalizzato' + leMiePosizioni.length + 'punti');
    } else if (leMiePosizioni.includes(laMiaScelta) == false) {
        leMiePosizioni.push(laMiaScelta);
    } else {
        //avvisoo l'utente che é un dupicato
        alert('duplicato')
    }





} while (isBombaTrovata == false && leMiePosizioni.length < 84)
    console.log(laMiaScelta);


if (leMiePosizioni.length == 84) {
    alert("hai vinto, totalizzando " + leMiePosizioni.length + ' punti')
}

//funzioni
 function getRndInteger(min,max) {
     return Math.floor(Math.random())
 }
