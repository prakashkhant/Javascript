var person = {
    fristName : 'Prakash',
    lastName : 'Khant',
    age : 23,
    OwnCar : false
}
console.log(person);

// sepearte retrive Dot Notation

console.log(person.fristName);

// bracket notation

console.log(person['lastName']);

var cap = {
    fristName : 'Steve',
    age : 102,
    frinds : ['Bucky barnes','brue banner','Tony Stark','Natasa'],
    adress : {
        state : 'new York',
        city : {
            name : 'Brooklyn',
            pincode : 523789
        }
    }

}

console.log(cap.frinds);
console.log(cap.frinds[2]);
console.log(cap.adress.city.pincode);

cap.isAvenger = false;
cap.movies = ['Age of Ultron','Avengers','Civil war'];
console.log(cap);

delete cap.age;
console.log(cap);