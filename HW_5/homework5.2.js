function isPalindrome(str) {
    const string = str;
    return string === string.split('').reverse().join('');
};
const test = 'string';
console.log(isPalindrome(test));