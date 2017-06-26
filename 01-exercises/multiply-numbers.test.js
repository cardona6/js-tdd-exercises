/*
    Similar to the add-numbers function, 
    write a function that multiplies any
    number of arguments passed to it.
    some expectations:
        multiply(4, 2)  // --> 8
        multiply(2, 2, 3)  // --> 18
    Write your implementation in TDD
        1. Add a Test (see it failing - RED)
        2. Write Code (to make it pass - GREEN)
        3. Refactor if needed
        4. REPEAT
 */
function multiplies(number){
    var result = [];
for (var i = 0; i <= number.length; i++) {
       if (i % 2 === 0 ){
        console.log([i]);
    }else if (i % 3 === 0) {
        console.log([i]);
    }else{
        console.log(i);
    }

test('multiply numbers = 8 and 18', function(){
    var result = multiplies(number)
    expect(result).toEqual([8,18])
});

