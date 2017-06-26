function findAlive(writers) {
  // ToDo: Implement this function to make all the tests below pass
  // DO NOT Change the tests (you can add more tests though)

  //create empty array
  var alivePeople = []
  // go through array and check if alive
  for (var i = 0; i < writers.length; i++) {

    // if alive add them to array
    if (writers[i].alive == true) {
      alivePeople.push(writers[i]);
    }
  }
  //return array
  return alivePeople;
}

// function to find people by age
function age(writers, number) {
  var result = [];
  for (var i = 0; i < writers.length; i++) {
    if (writers[i].age >= number) {
      result.push(writers[i]);
    }
  }
  return result;
}
test('function should return the age of a cretain person', function () {
  var persons = [
    {
      firstName: "Hervin",
      lastName: "Cardona",
      occupation: "student",
      age: 25,
      alive: false
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false
    },
    {
      firstName: "bell",
      lastName: "hooks",
      occupation: "writer",
      age: 64,
      alive: true
    }
  ];
  var result = age(persons, 50);
  expect(result).toEqual([{
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }])
});

test('function should retrieve only alive writers', function () {

  var persons = [
    {
      firstName: "Hervin",
      lastName: "Cardona",
      occupation: "student",
      age: 25,
      alive: false
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false
    },
    {
      firstName: "bell",
      lastName: "hooks",
      occupation: "writer",
      age: 64,
      alive: true
    },
  ];

  var result = findAlive(persons);

  expect(result).toEqual([{
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }])
});

function byAge(writers, number, boolean) {
var result = [];
if (boolean){
   for (var i = 0; i < writers.length; i++) {
    if (writers[i].age >= number) {
      result.push(writers[i]);
    }
  }
  return result;
} else {
     for (var i = 0; i < writers.length; i++) {
    if (writers[i].age <= number) {
      result.push(writers[i]);
    }
  }
  return result;
}

}


test('function all people over 60 is false else is true  ', function () {
  var persons = [
    {
      firstName: "Hervin",
      lastName: "Cardona",
      occupation: "student",
      age: 25,
      alive: false
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false
    },
    {
      firstName: "bell",
      lastName: "hooks",
      occupation: "writer",
      age: 64,
      alive: true
    },
  ];

  var result = byAge(persons, 60, true);
  expect(result).toEqual([{
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }])
})

test('function all people under 60 when false', function () {
   var persons = [
    {
      firstName: "Hervin",
      lastName: "Cardona",
      occupation: "student",
      age: 25,
      alive: false
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false
    },
    {
      firstName: "bell",
      lastName: "hooks",
      occupation: "writer",
      age: 64,
      alive: true
    },
  ];
var result = byAge(persons,60,false)
expect(result).toEqual([{
      firstName: "Hervin",
      lastName: "Cardona",
      occupation: "student",
      age: 25,
      alive: false
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false
    }
    ])
});

test('a array is empty',function(){
var result = byAge([],60, false)
expect(result).toEqual([])
});

test('all people over 90 years', function(){
var persons = [
    {
      firstName: "Hervin",
      lastName: "Cardona",
      occupation: "student",
      age: 25,
      alive: false
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false
    },
    {
      firstName: "bell",
      lastName: "hooks",
      occupation: "writer",
      age: 64,
      alive: true
    },
  ];
var result = byAge(persons,90,true)
expect(result).toEqual([])
});