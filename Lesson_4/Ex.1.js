var num = 999;
function converter(number) {
    if (number > 999 || number < 0) {
        console.log('Input a number between 0 and 999.')
    }
    var descr_number = {};
    descr_number.единицы = number % 10;
    descr_number.десятки = Math.trunc(number / 10 % 10);
    descr_number.сотни = Math.trunc(number / 100);

    console.log(descr_number);

}

converter(num)