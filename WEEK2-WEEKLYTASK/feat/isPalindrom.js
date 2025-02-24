export const isPalindrom = (word) => {
    if (typeof word !== 'string') return;
    let string = '';
    for (let i = word.length-1; i >= 0; i--) {
        string += word[i]
    }
    // check if both are palindrom
    if (string === word) return `${word} is Palindrom`;
    else return `${word} is not Palindrom`;
}