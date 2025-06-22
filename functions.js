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

function caesarCipher(str, shift) {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabetString.split("");
    const stringArray = str.split("");

    for (let i = 0; i < stringArray.length; i++) {
        let origUp = false;
        if (stringArray[i] === stringArray[i].toUpperCase()) {
            origUp = true;
            stringArray[i] = stringArray[i].toLowerCase();
        } else {
            origUp = false;
        }
        let index = alphabetArray.indexOf(stringArray[i]);
        let newIndex = index + shift;
        if (newIndex > 25) {
            newIndex = newIndex - 26;
        }
        if (origUp) {
            stringArray[i] = alphabetArray[newIndex].toUpperCase();
        } else {
            stringArray[i] = alphabetArray[newIndex];
        }
        
    }
    const newString = stringArray.join("");
    return newString;
}

export {capitalize, reverseString, Calculator, caesarCipher};