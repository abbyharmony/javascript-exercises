const sumAll = function(min, max) {
    if (typeof min !== "number" || typeof max !== "number") {
        return "ERROR";
    } else if (min > max) {
        [min, max] = [max, min];
    } else if (min < 0 || max < 0) {
        return "ERROR";
    }
    
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
