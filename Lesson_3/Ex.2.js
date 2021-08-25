var prices = [100, 500, 1000, 9000];
var sum = 0;
function countBasketPrice(basket) {
    for (var i in basket) {
        sum = sum + basket[i];
    }
    return sum;
}
console.log(countBasketPrice(prices))