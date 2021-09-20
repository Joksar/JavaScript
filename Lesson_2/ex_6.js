function sum(arg_1, arg_2) {
    return arg_1 + arg_2;
}

function sub(arg_1, arg_2) {
    return arg_1 - arg_2;
}

function mult(arg_1, arg_2) {
    return arg_1 * arg_2;
}

function div(arg_1, arg_2) {
    return arg_1 / arg_2;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return sum(arg1, arg2);
            break;
        case 'subtract':
            return sub(arg1, arg2);
            break;
        case 'multiply':
            return mult(arg1, arg2);
            break;
        case 'divide':
            return div(arg1, arg2);
            break;
    }
}

console.log(mathOperation(10, 30, 'sum'));
console.log(mathOperation(10, 30, 'subtract'));
console.log(mathOperation(10, 30, 'multiply'));
console.log(mathOperation(10, 30, 'divide'));