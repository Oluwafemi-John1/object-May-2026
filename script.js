// const studentData = {key: value}
// Where key can be a string or symbol, while the value can be of any data type

// To access data in an object, we can use dot or bracket notation

const studentData = {
    studentName: "Oluwanifemi",
    age: 10,
    accBal: undefined,
    hobbies: ['drawing', 'coding'],
    jump(name) {
        console.log(`${name} has jumped`);
    }
}

// console.log(studentData.hobbies);
// console.log(studentData['age']);
// console.log(studentData['hobbies'][1]);
studentData.jump('Segun')