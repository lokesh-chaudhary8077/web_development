//approach 1
// function fizzbuzz(n){
//     for(let i = 1;i <= n;i++){
//         if(i % 3 === 0 && i % 5 == 0){
//             console.log('FizzBuzz');
//         }
//         else if(i % 3 === 0){
//             console.log('fizz');

//         }else if(i % 5 === 0){
//             console.log('buzz');
//         }else{
//             console.log(i);
//         }
//     }
// }
// fizzbuzz(20);

//approach 2
// function fizzbuzz(n){
//         for(let i = 1;i <= n;i++){
//             let str = ""
//             if(i % 3 === 0){
//                 str += 'Fizz';
//             }
//             if(i % 5 === 0){
//                 str += "buzz"
//             }
//             if(str === ""){
//                 str += i;
//             }
//             console.log(str);
//         }
// }
// fizzbuzz(20);



//approach 3
function fizzbuzz(n){
    let count3 = 1;
    let count5 = 1;
        for(let i = 1;i <= n;i++){
            let str = ""
            if(count3 === 3){
                str += 'Fizz';
                count3= 0;
            }
            if(count5 === 5){
                str += 'buzz';
                count5= 0;
            }
            if(str === ""){
                str += i;
            }
            console.log(str);
            count3++;
            count5++;
        }
}
fizzbuzz(20);




