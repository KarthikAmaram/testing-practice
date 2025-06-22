function capitalize(str) {
    const letters = str.split("");
    const capLetter = letters[0].toUpperCase();
    letters[0] = capLetter
    newStr = letters.join("");
    return newStr;
};

function reverseString(str) {
    const splitString = str.split("");
    const reversed = splitString.reverse();
    const reversedString = reversed.join("");
    return reversedString;
}

class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    divide(num1, num2) {
        return num1 / num2;
    }
}

export {capitalize, reverseString, Calculator};