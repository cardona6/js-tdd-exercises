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
    return phrase.replace(/[aeiouAEIOU]/g, '');
  
}

test('when remove Vowels from goodbye ',function(){
    var result = removeVowels("goodbye");
    expect(result).toEqual("gdby");
});

test('when remove Vowels from nodegirls ',function(){
    var result = removeVowels("nodegirls");
    expect(result).toEqual("ndgrls");
});

test('when remove Vowels from how are you today ',function(){
    var result = removeVowels("how are you today");
    expect(result).toEqual("hw r y tdy");
});

test ('when remove Vowels from hEllo',function(){
    var result = removeVowels("hEllo");
    expect(result).toEqual("hll");
});
/*
This is a sample test - remove it and write AT LEAST 5 more tests to prove the function works as expected  
test('removeVowels should remove the Os', function(){
    var result = removeVowels('Tom');
    expect(result).toBe('Tm');
});
*/