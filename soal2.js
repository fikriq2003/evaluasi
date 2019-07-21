var n = 20;
var angkaGenap = [];
var angkaGanjil = [];

function klasifikasiAngka(n) {
    for (i = 1; i < n; i++){
        if(i % 2 == 0) {
            angkaGenap.push(i)
        } else {
            angkaGanjil.push(i)
        }
    }
}
klasifikasiAngka(20)
document.write('array genap : '+ angkaGenap)
document.write("<br>")
document.write('array ganjil: ' +angkaGanjil)