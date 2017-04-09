'use strict';

function oblicz(event) {
    event.preventDefault();
   
    //zmienne z wartościami pól formularza
    var wplata = parseInt(document.getElementById('wplata').value);
      
    var iloscLat = parseInt(document.getElementById('ilosc-lat').value);
      
    var okresKapitalizacji = parseInt(document.getElementById('okres-kapitalizacji'). value);
       
    var Oprocentowanie = parseInt(document.getElementById('oprocentowanie').value)/100;
    
    var podatek = document.getElementById('podatek').checked;

    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, Oprocentowanie, podatek);
    
    document.getElementById('wynik').innerHTML = wynik;

}


function obliczZysk(wplata, iloscLat, okresKapitalizacji, Oprocentowanie, podatek) {
    
 if(podatek) {
     var oprocentowanieOpodatkowane = Oprocentowanie - (Oprocentowanie * 0.19);
    } else {
     var oprocentowanieOpodatkowane = Oprocentowanie;
 }   
  
   var kapital = wplata *(Math.pow(1 + (oprocentowanieOpodatkowane/okresKapitalizacji),iloscLat*okresKapitalizacji)); 
    
    return kapital.toFixed(2);

}
 