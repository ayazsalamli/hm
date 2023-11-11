alert("Xoş gəlmisiniz!");

let icaze = confirm('Yaşınız 18-den yuxarıdırmı?');
let netice;
let netice2;

if (icaze == true) {
    netice = 'Siz masini sure bilersiz!';

}
else {
    netice = ' Sizin yasiniz catmir!';
}

alert(netice);

if (icaze == true) {
    let city1 = prompt(' Hardan gedirsiz? ');
    let city2 = prompt(' Hara gedirsiz? ');

    let mesafe = prompt('Mesafe nedi');
    let suret = prompt('Suret nedi');
    let vaxt = mesafe / suret;
     netice2 = city1 + " şəhərindən " + city2 + " şəhərinə məsafə " + mesafe + " km, suret " + suret + " km/saat, vaxt " + vaxt + "  saat olacaq.";
}

document.getElementById('ayaz').innerHTML = netice2 ;

