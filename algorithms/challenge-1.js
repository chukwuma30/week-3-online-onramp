function romanToDecimal(roman) {
    const converter = {
        1: "I",
        4: "IX",
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
        1000: "M",
    };
    const numbers = [1000, 900, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1];

    function romanToDecimal(roman) {
        let result = " ";
        let i = 0;
        while (roman > 0) {
            const subNum = numbers[i];
            if (subNum > roman) {
                i++;
            } else {
                roman -= subNum;
            }
        }
    }
}
module.exports = romanToDecimal