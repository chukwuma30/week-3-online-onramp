function romanToDecimal(roman) {
    const converter = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    };
    const numbers = [1000, 900, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1];

    function romanToDecimal(roman) {
        let result = "";
        let i = 0;
        while (roman > 0) {
            const subNum = numbers[i];
            if (subNum > roman) {
                i++;
            } else {
                roman -= subNum;
                result += converter[subNum];
            }
        }
        return result;
    }
}

console.log(romanToDecimal(36));

//module.exports = romanToDecimal;


function transpose(arr) {
    return arr[0].map((col, c) => arr.map((row, r) => arr[r][c]));
}


console.log(transpose([
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21],
]))