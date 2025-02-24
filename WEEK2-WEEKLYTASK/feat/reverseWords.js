export function reverseWords(sentence) {
    if (typeof sentence !== 'string') return;
    let reversed = ''; // collecting word to reverse
    let word = ''; // collecting word one by one
    for (let i = 0; i <= sentence.length - 1; i++) { // start collecting from the first word
        if (sentence[i] === ' ') {
            reversed = ' ' + word + reversed; // in case of (space), the word will stop collecting for a while and are pushed to 'reversed' backwards one by one
            word = '';
        } else word = word + sentence[i]; // the letter will be always be updated by next loop until (space), after (space) it will collecting new one
    }
    reversed = word + reversed; // the output will be the reversed order of words of the sentence, because the first collected word pushed far away backward from the begining
    return reversed;
}