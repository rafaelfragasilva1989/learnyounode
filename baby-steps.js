array = process.argv;

var i = 2;
var m = 0;

while (i < array.length){
    m += parseInt( array[i]);
    i += 1;

}

console.log(m);