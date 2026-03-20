// function anything(){
//     let naam = 'lokesh';
//     function printNaam(){
//         console.log(naam);
//     }
//      return printNaam;
// }
// let fun = anything();
// fun();


// function counter(){
//     let count = 0;
//     function getCount(){
//         return count;
//     }
//     return getCount;
// }
// let counter1 = counter();
// console.log(counter1());  //0


// function counter(){
//     let count = 0;
    
//     return {
//         getCount : function(){
//             return count;
//         }
//     };
// }
// let counter1 = counter();
// console.log(counter1.getCount()); // 0



//application
function counter(){
    let count = 0;
    return{
        getCount: function(){
            return count;
        },
        increment : function(){
            count++;
        },
        decrement : function(){
            count--;
        },
        reset: function(){
            count = 0;
        }

    };

}
let counter1 = counter();
console.log(counter1.getCount());
counter1.increment();
counter1.increment();
console.log(counter1.getCount());
counter1.decrement();
console.log(counter1.getCount());
counter1.increment();
counter1.increment();
console.log(counter1.getCount());
counter1.reset();
console.log(counter1.getCount());

