//array dest

//let fruits = ['apple','Guava','mango','banana','lichi','pineappple'];

// older way
// let first = fruits[0];
// let second = fruits[1];

// console.log(first);
// console.log(second);

//destructure an array
// let [first,second] = fruits;
// console.log(first);
// console.log(second);


// let fruits = ['apple','Guava','mango'];
// let [first,second,third,fourth] = fruits;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);//undefine


//default value
// let fruits = ['apple','Guava','mango'];
// let [first,second,third,fourth = 'ananas'] = fruits;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);//ananas



//override
// let fruits = ['apple','Guava','mango','grapes'];
// let [first,second,third,fourth = 'ananas'] = fruits;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);//grapes



//-------------------------


//object dest  
// old way


// let car = {
//     name:'nano',
//     price: 10000
// }
// let n = car.name;
// let p = car.price;
// console.log(n);
// console.log(p);


// object destructuring

// let car = {
//     name:'nano',
//     price: 10000
// }

// let {name,price} = car;
// console.log(name);
// console.log(price);



let car = {
    name:'nano',
    price: 10000
}

let {name:n,price:p} = car;
console.log(n);
console.log(p);









