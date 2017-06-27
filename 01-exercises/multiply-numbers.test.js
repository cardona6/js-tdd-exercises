/*
    Similar to the add-numbers function, 
    write a function that multiplies any
    number of arguments passed to it.
    some expectations:
        multiply(4, 2)  // --> 8
        multiply(2, 2, 3)  // --> 12
    Write your implementation in TDD
        1. Add a Test (see it failing - RED)
        2. Write Code (to make it pass - GREEN)
        3. Refactor if needed
        4. REPEAT
 */

function multiplies(){
    var args = Array.prototype.slice.call(arguments);
    var result = 1
    for(var i = 0; i< args.length; i++){
        result=result*args[i];
    }
    return result;
}

test('multiply numbers  4 and 2 equals 8', function(){
    var result = multiplies(4,2)
    expect(result).toEqual(8)
});

test('multiply numbers 2, 2, 3 equals 12', function(){
    var result = multiplies(2,2,3)
    expect(result).toEqual(12)
});

