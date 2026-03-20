// file1
let pi = Math.PI;
console.log(pi);

// let ans = (num) => {return num * num}
let ans1 = (num) => num*num;
let ans2 = (a,b) => a+b;

console.log(ans1);
console.log(ans2);

//by default export an empty object {}
// module.exports = {}

// module.exports = {pi,ans1,ans2}; 
// module.exports = {
//     pi:pi, 
//     ans1:ans1,
//     ans2:ans2
// }; 

module.exports = 'hello i am lokesh'; 
