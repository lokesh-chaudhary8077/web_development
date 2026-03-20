function someFun(){
    let name = 'lokesh';
    function printName(){
        console.log(name);
    }
    return printName;
}
 let returnVAl = someFun();
 returnVAl();