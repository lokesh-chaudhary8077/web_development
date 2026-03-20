let obj = {
    evs : 90,
    cn : 90,
    wed : 100,
    Math : 10,
    Total : function (){ // Methods
        // console.log(90 + 90 + 100 + 10);
        return(90 + 90 + 100 + 10);
    },
    bulao : function(){
        // console.log("sam ko bulao");
        return("sam ko bulao");
    }
}

console.log(obj.evs);
console.log(obj.Total());
console.log(obj.bulao());