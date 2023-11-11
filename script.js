alert("Xoş gəlmisiniz!");

let icaze = confirm('Yaşınız 18-den yuxarıdırmı?');
let netica;







if (icaze == true) { 
    netica = 'Siz masini sure bilersiz!'
    let city1 = prompt(' Hardan gedirsiz? ')
let city2 = prompt(' Hara gedirsiz? ')

let mesafe = prompt( 'Mesafe nedi');
let suret = prompt( 'Suret nedi');
let vaxt = mesafe / suret ;
let netice = city1 + " şəhərindən " + city2 + " şəhərinə məsafə " +  mesafe + " km, suret " + suret + " km/saat, vaxt " + vaxt + "  saat olacaq";
}
else {
    netica = ' Sizin yasiniz catmir!'
}

document.getElementById('ayaz').innerHTML = netice;

