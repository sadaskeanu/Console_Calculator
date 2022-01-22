function calculate (operation, a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Error';
    } else if (operation === undefined || a === undefined || b === undefined) {
        return 'Error';
    }
    if (operation == '+') {
        return (a + b);
    } else if (operation == '-') {
        return (a - b);
    } else if (operation == '/') {
        return (a / b);
    } else if (operation == '*') {
        return (a * b);
    } else if (operation == '%') {
        return (a % b); 
    } else if (operation == '**') {
        return (a ** b);
    } else {
        return 'unknown operation';
    }
}
let result = calculate ('/',7,5);
console.log(result);