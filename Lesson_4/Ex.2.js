var basket = {
    guitar: 15000,
    piano: 23000,
    recorder: 4000
};


function sumprice(prices) {
    let sum = 0;
    for (let price of Object.values(prices)) {
        sum += price;
    }
    console.log(sum)
}

sumprice(basket);

