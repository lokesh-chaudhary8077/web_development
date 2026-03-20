// function sum(num3){//parametrised function
//     let num1 = 10;
//     let num2 = 20;
//     console.log(num1+ num2 + num3);
// }
// sum(30);

// function sum1(){
//     let num1 = 10;
//     let num2 = 50;
//     return(num1 + num2);
// }
// console.log(sum1());



// //multiple parameters
// function sam(num1,num2){
//     return num1 + num2;
// }
// console.log(sam(50,30));



// function sum1(num1, num2 = 40){
//     console.log(num1);
//     console.log(num2);
// }
// // sum1(20);
// sum1(20,50);


//grade
function grade(marks){
    if(marks>=80){
        return 'o';
    }
    else if (marks>=60){
        return 'A+';
    }
    else if (marks>=40){
        return 'B+';
    }
    else if (marks>=30){
        return 'C+';
    }
    else {
        return 'Fail';
    }
}
// console.log( grade(45) );
// console.log( grade('sam') );


function summ(num1,num2){
    return num1 + num2;
}
console.log(summ(20 , 50));
//output 70


function summ(num1,num2){
    return num1 + num2;
}
console.log(summ(20 , 'sam'));
//output 20sam


function summ(num1,num2){
    return num1 + num2;
}
console.log(summ(20 , true));
//output 21


function summ(num1,num2){
    return num1 + num2;
}
console.log(summ('20' , true));
//output 20true