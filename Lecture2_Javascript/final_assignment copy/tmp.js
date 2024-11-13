
function checkPassword(password){
    // condition 1) Letters
    // condition 2) Numbers
    // condition 3) character that is neither a letter nor a number
    const c1 = /\d+/.test(password);
    const c2 = /[a-zA-Z]/.test(password);
    const c3 = /[?=.*[!@#$%^&*]/.test(password);
    return c1 && c2 && c3;
}

console.log(checkPassword("asdasd"));
console.log(checkPassword("asd123"));
console.log(checkPassword("123123"));
console.log(checkPassword("as@12"));

function matchExpression( str ) {
    var rgularExp = {
        contains_alphaNumeric : /^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/,
        containsNumber : /\d+/,
        containsAlphabet : /[a-zA-Z]/,

        onlyLetters : /^[A-Za-z]+$/,
        onlyNumbers : /^[0-9]+$/,
        onlyMixOfAlphaNumeric : /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/
    }

    var expMatch = {};
    expMatch.containsNumber = rgularExp.containsNumber.test(str);
    expMatch.containsAlphabet = rgularExp.containsAlphabet.test(str);
    expMatch.alphaNumeric = rgularExp.contains_alphaNumeric.test(str);

    expMatch.onlyNumbers = rgularExp.onlyNumbers.test(str);
    expMatch.onlyLetters = rgularExp.onlyLetters.test(str);
    expMatch.mixOfAlphaNumeric = rgularExp.onlyMixOfAlphaNumeric.test(str);

    return expMatch;
}