let fs = require('fs');
// console.log(fs);

// we will perform CRUD(create,read,update,delete)

//create or write
// let data = 'hi'
//  fs.writeFile('abc.txt',data,{
//     encoding: 'utf-8',
//     flag:'w'
//  },(err) =>{
//     if(err){ throw err}
//     console.log('file written successfully')
//  })


//another
// let data2 = ('hello');
//  fs.writeFileSync('abc.txt',data2);



//read

//  fs.readFile('abc.txt',{
//     encoding: 'utf-8',
//     flag:'r'
//  },(err,data) =>{
//     if(err){ throw err}
//     console.log(data)
//  })

// let data = fs.readFileSync('abc.txt')
// console.log(data.toString()); 




//update

// fs.appendFile('abc.txt','hi',() =>{
//     if(err){ throw err}
//     console.log('update krdiya tere bhai ne');
// })


// fs.appendFileSync('abc.txt','hello'); 





//delete

// fs.unlink('abc.txt',(err) => {
//     if(err){throw err}
//     console.log('mai dadmaash hu');
// })

fs.unlinkSync('abc.txt')
