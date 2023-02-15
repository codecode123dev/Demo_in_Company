// for (let i = 0; i < 10; i++) {
//     if (i == 3) {
//         continue
//     }
//     console.log(`i = ${i}`)
// }


let cars = [
        'Mercedes G63',
        'MC laren 570S',
        'Lamborghini',
        'Ferrari F8',
        'Appolo IE'
    ]
    // for (let i = 0; i < cars.length - 1; i++) {
    //     console.log(cars[i])
    // }

// console.log('using foreach')
//     //C1
// cars.forEach(function(car) {
//         console.log(car)
//     })
//     //C2:
// cars.forEach(function(car) {
//     console.log(car)
// })

//using for of

//Từng phần tử bên trong của mảng gán bằng car
for (let car of cars) {
    console.log(`name: ${car}`) //in ra tên (${a})
}
// for in( duyệt inđex, chỉ số của phần tử bắt đầu bằng 0)
for (let a in cars) {
    console.log('i = ' + a) //in ra index của sản phẩm(+ a)
}

// cách khác 

cars.forEach((car, index, array) => {
    console.log(`${index+1}-${car}`)
})

// cho thêm phần tử bên trong mảng

cars.push("Mercedes Sedan")
console.log(cars)
    //fillter items, how to find some items which contains"Appolo"(locj ra phần tử có tên là "Aplôlo")

// let filteredCars = cars.filter(function(car) {
//     return car.includes("Mercedes")
// })
// console.log(`filteredCars = ${filteredCars}`)
// console.log(`we found ${filteredCars.length} cars`)


// tim kie ko phan biet chu hoa chữ thường

let filteredCars = cars.filter(function(car) {
    return car.toLowerCase().includes("mercedes")
})
console.log(`filteredCars = ${filteredCars}`)
console.log(`we found ${filteredCars.length} cars`)

// an array of numbers
let someNumbers = [5, 6, 87, 7, 5, 1]
someNumbers[0] = 4
    //mangr ánh xạ sẽ tạo ra bảng này và thay đổi giá trị
    // mảng ánh xạ có đặc điểm là cùng độ dài( nhưng giá trị thì thay đổi)
let squaredNumbers = someNumbers.map(eachNumber => {
    return eachNumber + eachNumber
})

console.log(`someNumbers = ${someNumbers}`)
console.log(`squaredNumbers = ${squaredNumbers}`)

// delete an item = filter

console.log('after deleted')
    // delete all items which less than 5
someNumbers = someNumbers.filter(eachNumber => eachNumber >= 5) // set điều kiện

console.log(`someNumbers = ${someNumbers}`)

// function in JS
// ham sayHello đẻ hiện ra của sỏ console
function sayHello(name) {
    console.log(`Hello ${name}`)
}

sayHello('Minh')

//hàm tính tổng 2 sô 

function sum(x, y) {
    return x + y
}
console.log(`sum 5 an 4 is ${sum(5,4)}`)

//Cach kkhac
// function expression

const multiply = function(a, b) {
        return a * b
    }
    // one line function,hamf toFixed(2) là đê lấy lam tròn 2 số sau dấu phẩy
const divide = (a, b) => (a / b).toFixed(2)

console.log(`sum 5 and 4 is ${sum(5,4)}`)
console.log(`multiply 4 and 6 = ${multiply(4,6)}`)
console.log(`5 divide by 3 is ${divide(5,3)}`)
console.log(`5 divide by 0 is ${divide(5,0)}`) //ra giá trị infinity
console.log(`5 divide by 7 is ${divide(5,7)}`)

// function with default arguments:
function hello(name = "Guest") { // ko nhập gì thì name sẽ bằng Guest
    console.log(`Hello ${name}`)
}
hello()
hello('minh')

// let seconds = 0
// setInterval(function() {
//         seconds = seconds + 1
//         console.log(`${seconds}. call this function each 1 seconds`)
//     }, 1000)
//1000 mili giây mỗi một giây thì chui vào hàm một lần( áp dụng vào làm đồng hồ)

// define an object
let point = {}
point.a = 1
point.b = 2
console.log(point.a)

console.log(`b = ${point.a} , b = ${point.b}`)

//destructuring an object(lấy ra những thuộc tính ben trong)
// để laáy ra khi dũ liệu có nhiều thuộc tính
let { a, b } = point
a = 123
console.log(`a = ${a}, b = ${b}`)
console.log(point.a) //thuộc tính a destructure độc lập , nằm ở cùng nhớ khác với point.a
point.a = 100 //hoac point.['a'] = 100
console.log(point.a)

// lấy kiểu
console.log(typeof point)
console.log(typeof point.b)

const myDreamCar = {
    maker: 'Mercedes',
    model: 'G63',
    year: 2022
}

console.log(myDreamCar.color === undefined)
console.log(myDreamCar)
    // alert(JSON.stringify(myDreamCar))

for (let key in myDreamCar) {
    console.log(`key = ${key}`) // hiện ra các trường, các thuộc tính
}

// for of ko dùng dc với đối tượng
// for (let item of values(myDreamCar)) {  ko dc
//     console.log(`item = ${item} `)
// }
console.log("list of values of an object")
for (let values of Object.values(myDreamCar)) {
    console.log(`item = ${values} `)
}
//Hàm entries để xe cụ thể bên tring có những gì
console.log(Object.entries(myDreamCar)[1])

// ... là nhân bản đối tượng ra một vùng nhớ khác độc lập(clone an object)

const myDreamCar2 = {...myDreamCar }

myDreamCar.year = 2021
console.log('my 1: ', myDreamCar)
console.log('my 2: ', myDreamCar2)

// create object using constructor function

function Car(maker, model, year, color) {
    this.maker = maker
    this.model = model
    this.year = year
    this.color = color
}

let car1 = new Car('McLaren', 'McLaren 720s Spider', 2021, 'red')
let car2 = new Car('Toyota', 'Tundra', 2022, 'Army green')
let car3 = new Car('Mazda', 'CX30', 2022, 'Red')

console.log(Object.keys(car1))
console.log(Object.values(car1))
    // hàm speed là tốc độ
car1.run = function(speed) {
    console.log(`I run at speed: ${speed} km/h`)
}

car1.run(236)

// add other methods
car1.describe = function() {
    console.log(`maker : ${this.maker},
                model : ${this.model},
                year : ${this.year},
                color : ${this.color}`)
}

car1.describe()
car2.describe = car1.describe //phương thức describe của đối tượng car2 tham chiếu đến describe của đối tượng car1
car2.describe()
car3.describe = car1.describe //phương thức describe của đối tượng car3 tham chiếu đến describe của đối tượng car1
car3.describe()

// xóa property

console.log(car1)
delete car1.color
console.log('After delete color')
console.log(car1)

//define a class
//có thể viết nhiều constructor bên trong class
// class Emloyee {
// //     //     constructor() {
// //     //         this.name = ''
// //     //         this.departmentName = 'No department'
// //     //     }
//     constructor(name, department) {
//         this.name = name  //'||' giá trị mặc định nếu như ko nhập thì là rỗng
//         this.departmentName = department ? ? 'No Department'
//     }
// // }

// '||' giá trị mặc định nếu như ko nhập thì là rỗng
// tính kế thừa(extends)
class Person {
    constructor(name, email, age) {
        this.name = name || 'minh'
        this.email = email || 'a@gmail.com'
        this.age = age || 18
    }

}

class Employee extends Person {
    constructor(name, email, age, department) {
        super(name, email, age)
        this.department = department || ' No department'
    }
}

// class Emloyee {
//     constructor(name, department) {
//         this.name = name || 'minh'
//         this.department = department
//     }
// }

let employeeA = new Employee()
console.log(employeeA)

let employeeB = new Employee('Minh', 'It')
console.log(employeeB)

let employeeC = new Employee('John', 'John@gmail.com', 25, 'Sales')
console.log(employeeC)

console.log(`Employee C: ${JSON.stringify(employeeC)}`)

let personC = new Person('Anna', 'anna@gmail.com', 22)
console.log(personC)

console.log(personC.constructor.name === 'Person') //so sánh xem có cùng kiểu và cùng giá trị ko

console.log(personC.constructor.name) //xem tên constructor  là gì

//A Promise is an object representing
// the eventual completion or failure of
// an asynchronous operation(Promise trả về hai hàm thành công hoạc thất bại)

// //Example : send a request to Api server
// const url = 'https://api.publicapis.org/entries'
// fetch(url).then(response => {
//     //
// }).catch(error => {

// })