module.exports = function makeExchange(currency) {
    let delta = currency;
    let halfDollar;
    let quarter;
    let dime;
    let nickel;
    let penni;
    const resultExchange = {};  

    halfDollar = Math.floor(delta / 50);
    delta -= halfDollar * 50;
    quarter = Math.floor(delta / 25);
    delta -= quarter * 25;
    dime = Math.floor(delta / 10);
    delta -= dime * 10;
    nickel = Math.floor(delta / 5);
    delta -= nickel * 5;
    penni = delta / 1;

    if (currency > 10000){
        resultExchange.error = "You are rich, my friend! We don't have so much coins for exchange";
        return resultExchange;
    } else {
        if (halfDollar > 0){
            resultExchange.H = halfDollar;
        }
        if (quarter > 0){
            resultExchange.Q = quarter;
        }
        if (dime > 0){
            resultExchange.D = dime;
        }
        if (nickel > 0){
            resultExchange.N = nickel;
        }
        if (penni > 0){
            resultExchange.P = penni;
        }
        return resultExchange;
    }
}