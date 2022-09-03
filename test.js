// oddishOrEvenish(373) ➞ "Odd"
//  3 + 7 + 3 = 13
// 13 % 2 = 1

// oddishOrEvenish(4433) ➞ "Even"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0

function oddishOrEvenish(num) {
    const total = num.toString().split("").reduce((t, n) => t += parseInt(n), 0);

    if (total % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
