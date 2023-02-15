// if (true) {
//     var course = 'Javascript basic';
// }
// console.log(course)

// //var(hosting(nhấc lên đầu))
// a = 1;
// var a;
// console.log(a)

// //let(hosting):ko hỗ trợ hosting
// //let a; ssẽ báo lỗi(chưa định nghĩa let)
// //const(hosting): ko hỗ trợ hosting
// // const a;sẽ báo lỗi(chưa định nghĩa const)
// // ko thể gán lại được là ko thể sử dụng toán tử gán tời lần 2 của nó
// //VD:

// const b = {
//     name: 'javascript'
// };
// // b.name = 'PHP' //gán dc 

// // b = 'PHP' // ko gán dc

// // => bởi vì đây là gán lại thuộc tính name cho object chứ ko gán cho a

// console.log(b.name)

// const courseName = 'Javascript';
// const description = 'Course name:' + courseName;
// console.log(description)

// Template string
// const courseName = 'Javascript';
// const courseName2 = 'PHP';
// // const description = `Course name : ${courseName} ${courseName2}`; // Template string
// const description = `Template string noi suy voi : \${}`;

// console.log(description);

// multi-line string(viết nhiều dòng)
//c1
// const lines = 'Line 1\n' +
//     'Line 2';
// console.log(lines)
//c2:
// const lines = `line1
// line2
// line3`;
// console.log(lines)

//Arrow function(hàm mũi tên)

//function declaration
// function logger(log) {
//     console.log(log);
// }
//function expression
// const logger = function(log) {
//     console.log(log);
// }

// logger('Message....')
//Arrow function(hàm mũi tên)
//vd
// const logger = (log) => {
//     console.log(log)
// }

// logger('Message ...')

// //vd
// const sum1 = (a, b) => {
//     return a + b
// };
// console.log(sum1);
// //vd
// const sum = (a, b) => a + b; //viết đằng sau mà ko có dấu {} thì dc hiểu là return luôn

// console.log(sum(2, 2));

//vd
// const sum = (a, b) => {
//     return {
//         a: a,
//         b: b
//     };
// };

// console.log(sum(2, 2));
//vd
const sum = (a, b) => ({ a: a, b: b });
// Phải thêm () để có thể in ra dc bởi vì sau dấu '{}' thì sẽ là return
console.log(sum(2, 2))

//VD
const logger = log => console.log(log);

logger('Message..')


// const course = {
//     name: 'Javascript basic!',
//     getName: function() {
//         return this.name; // this se la thằng course và name là name
//     }
// };
// console.log(course.getName()); // khi gọi hàm course.getName thì sẽ trả về this.name
const course = {
    name: 'Javascript basic!',
    getName: function() {
        return this.name; // this se la thằng course và name là name
    }
};