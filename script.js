alert("Hello");

let icaze = confirm('Yasiniz 18-den yuxaridir mi?');
let netica;

if (icaze == true) { 
    netica = 'Siz masini sure bilersiz'
}
else {
    netica = ' Sizin yasiniz catmir'
}



let city1 = prompt(' haradan gedirsiz ')
let city2 = prompt(' hara gedirsiz ')

let mesafe = prompt( 'Mesafe nedi');
let suret = prompt( 'Suret nedi');
let vaxt = mesafe / suret ;
let netice = city1 + " şəhərindən " + city2 + " şəhərinə məsafə " +  mesafe + " km " + suret + " km/saat " + vaxt + "  saat olacaq"

document.getElementById('ayaz').innerHTML = netice;

document.getElementById('ayaz').innerHTML = netice