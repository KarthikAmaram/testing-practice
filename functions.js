function capitalize(str) {
    const letters = str.split("");
    const capLetter = letters[0].toUpperCase();
    letters[0] = capLetter
    newStr = letters.join("");
    return newStr;
};

export {capitalize};