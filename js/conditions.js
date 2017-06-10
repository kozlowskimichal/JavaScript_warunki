'use strict';


var wzrostMateusz = 170;
var wzrostOlgi = 170;

/*Warunek if*/

if (wzrostOlgi < wzrostMateusz){
    console.log("Olga jest niższa :)");
}


/*Warunek if else*/

if (wzrostOlgi >wzrostMateusz) {
    console.log ("Olga jest wyższa :)")
} else {
    console.log("Olga jest niżasz :)")
}


/*Warunek if else if*/

if (wzrostOlgi > wzrostMateusz) {
    console.log("Olga jest wyższa :)");
}  else if (wzrostOlgi == wzrostMateusz) {
    console.log("Olga tak wysoka jak Mateusz");
}  else {
    console.log("Mateusz jest wyższy");
}



/*Warunek switch*/

var kolor ='zielony';

switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony');
        break;

    case 'zielony':
        console.log('Kolor zielony');
        break;
        
    case 'niebieski':
        console.log('Kolor niebieski');
        break;
    default:
        console.log('Inny kolor');
             
             
}