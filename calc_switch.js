

function Calc (operation, a, b) {

    let isNotValid = typeof a != 'number' || typeof b != 'number';

    if (isNotValid) {
        return 'Error';
    } 

    switch (operation) {
        case 'sum' : return a + b;
        case 'sub' : return a - b;
        case 'div' : return a / b;
        case 'mult' : return a * b;
        case 'rem' : return a % b;
        case 'exp' : return a ** b;
        default : return 'unknown operation';

}
}

let result = Calc('exp',2,8);
console.log(result);


