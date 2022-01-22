function calculate (operation, a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return 'Error';
    } else if (operation == '/' && b == 0) {
        return 'Error';
    }  else if (operation == '%' && b == 0) {
        return 'Error';
    }

    switch (operation) {
        case '+' : return a + b;
        case '-' : return a - b;
        case '/' : return a / b;
        case '*' : return a * b;
        case '%' : return a % b;
        case '**' : return a ** b;
        default : return 'unknown operation';
}
}
let result = calculate ('%',7,0);
console.log(result);