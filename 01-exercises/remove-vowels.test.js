/**
 * This function is supposed to remove vowels from a phrase
 * Add tests to prove that it functions properly with these examples at least:
 *         removeVowels("goodbye")  // --> "gdby"
 *         removeVowels("nodegirls")  // --> "nd grls"
 *         removeVowels('how are you today?') // --> "hw r y tdy?"
 * Consider EDGE cases (how the function behaves if you pass undefined, or a number etc..)
 * Then add a test that contains CAPITAL vowel letters (hEllo for example)
 *      - It should expect the E to be removed
 *      - Run the tests and see you new test fail (RED)
 *      - Change the implementatino to remove the letter (capital and small letters)
 *       (maybe Google Case Insensitive Regular Expressions and read about regular expressions and see how you can use them)
 */

function removeVowels(phrase) {
    return phrase.replace(/[aeiou]/g, '');
     var result = '';
    for (var i = 0; i < phrase.length; i++) {
        var phrase = words[i];
        if (phrase !== 'A' && phrase !== 'E' && phrase !== 'I' && phrase !== 'O' && phrase !== 'U') {
            result += phrase;
        }
    }
    console.log(result);
}

shortcut("goodbye");
shortcut("nodegirls");
shortcut('hor are you today?');

test('that contains CAPITAL vowel letters',function(){
    var removeVowels = [];
    expect(position).toEqual([]);
});

/*
This is a sample test - remove it and write AT LEAST 5 more tests to prove the function works as expected  
test('removeVowels should remove the Os', function(){
    var result = removeVowels('Tom');
    expect(result).toBe('Tm');
});
*/