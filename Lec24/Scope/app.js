console.log(a);
var a = 10;
function fun1(){
    var b = 10;
    function fun2(){
        console.log(a);
        console.log(b);
    }
    fun2();
}
fun1();