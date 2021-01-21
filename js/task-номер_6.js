let input;
const numbers = [];
let total = 0;
do {
    input = prompt( `Введите число: ` )
    if( input !== null ) {
        if( Number.isNaN( Number( input ) ) ) {
            alert( `Введено не число, попробуйте еще раз` );
            continue;
        }
        numbers.push( +input );
    }
} while( input !== null );
if( numbers.length !== 0 ) {
    for( let num of numbers ) {
        total += num;
    }
}
alert ( `Сумма чисел массива равна : ${total}` );