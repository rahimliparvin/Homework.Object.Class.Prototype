"use strict";


// let stu1 = {

//     name: "Konul",
//     surname: "Ibrahimova",
//     email:"konul@gmail.com",
//     phones: [5345,6574575],
//     education: {
//         names: ["Programming","Digital marketing"]
//     }
// }

//console.log(stu1.name);

// for (const key in stu1) {

//     console.log(key + "/" + stu1[key])
// }

//stu1.address = "Neftchiler";

//console.log(stu1.address);

//console.log(stu1);

// for (const key in stu1) {

//     console.log(key + "/" + stu1[key])
// }


// let user = {};

// user.name = "Pervin";

// console.log(user.name);

// for (const item of stu1.phones) {
//     console.log(item);
// }

//console.log(stu1.education.names);


let stu1 = {
    id: 1,
    name: "Eli",
    surname: "Talibov",
    address: "Xetai"
}

let stu2 = {
    id: 2,
    name: "Elekber",
    surname: "Hesenov",
    address: "Bayil"
}

let stu3 = {
    id: 3,
    name: "Mirze",
    surname: "Beshirov",
    address: "Bulbule"
}

let stu4 = {
    id: 4,
    name: "Shaiq",
    surname: "Kazimov",
    address: "Sedmoy"
}


let group = {
    name: "P135",
    capacity: 6,
    students: [],
    addStudent: function (student) {

        let stu = this.students.find(s => s.id == student.id)

        if (stu != undefined) {
            console.log("Student already exist");
            return;
        }

        if (this.students.length == this.capacity) {
            console.log("Group already filled");
            return;

        }

        this.students.push(student);
        return;

    },

    updateStudent: function (student) {

        let stu = this.students.find(s => s.id == student.id)

        if (stu != undefined) {
            stu.address = student.address;
        }

    },



    getStudents: function () {
        //console.log(this.students)

        // for (const item of this.students) {
        //     console.log(`${item.name} ${item.surname} ${item.address}`)
        // }

        return this.students;
    }
}

//group.addStudent();

group.addStudent(stu1);
group.addStudent(stu2);
group.addStudent(stu3);
group.addStudent(stu4);
// group.addStudent(stu1);
// group.addStudent(stu1);
// group.addStudent(stu2);
// group.addStudent(stu3);
// group.addStudent(stu1);

//console.log(group.students)

//console.log(group.getStudents());

// let datas = group.getStudents();

// getStudentsDatas(datas);


//getStudentsDatas(group.getStudents());

function getStudentsDatas(arr) {

    for (const item of arr) {

        console.log(`${item.name} ${item.surname} ${item.address}`)
    }
}



let updateStudent = {

    id: 4,
    address: "Ehmedli"
}

group.updateStudent(updateStudent);

let datas = group.getStudents();

// getStudentsDatas(datas);


//console.log(group.students.length);

// console.log(group);

// let arr = [1,2,3,4]

// let data = arr.find(m => m > 2)

// console.log(data);




let user = {
    name: "Elcan",
    company: {
        name: "Code Academy",
        rooms: [
            {
                name: "Yupiter",
                capacity: 15,
                computers: ["Hp", "Acer", "Apple"]
            },
            {
                name: "Saturn",
                capacity: 10

            }
        ]
    }
}


function getRoomCapacityByUser(user) {

    let rooms = user.company.rooms;
    let computers = [];

    for (const room of rooms) {
        if (room.name == "Yupiter") {

            computers = room.computers
        }
    }

    for (const computer of computers) {

        console.log(computer);
    }

    // return computers;

}

//console.log(getRoomCapacityByUser(user));

//getRoomCapacityByUser(user);


//Class


class Car {

    constructor(name, speed) {

        this.name = name;
        this.speed = speed;
    }

    showCarData(color) {

        return this.name + " " + this.speed + "-" + color;
    }


}

let car1 = new Car("Bmw", 250);

// console.log(car1.name);

// console.log(car1.showCarData("red"));


class Animal {
    constructor(name,sound){

        this.name = name;
        this.sound = sound;
    }

    static eat(){
        console.log("Animal eating");
    }


}

class Cat extends Animal{

    constructor(name,sound,color){
        super(name,sound);
        this.color = color;
    }

} 

let cat1 = new Cat("Luiz","Myaaauuu","Black");

//console.log(cat1.name);

//Animal.eat();

//Prototype

Array.prototype.getOddNums = function(arr){

    for (const num of arr) {
        
        if ( num % 2 == 1) {
            console.log(num);
        }
    }
} 

let nums = [1,2,3,4,5,6];

let numbers = [100,101,113,114,120]

// nums.getOddNums(nums);

// numbers.getOddNums(numbers);

Array.prototype.konul = function(){

    console.log("Hello world");
}

//nums.konul();


String.prototype.P135 = "ARROW";

let surname = "Abdullazade";

//console.log(surname.P135);



String.prototype.getStr = function(str){

    console.log(str);
}

let name = "Saiq";

// name.getStr("Hello");
