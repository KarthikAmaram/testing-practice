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

export {capitalize, reverseString};