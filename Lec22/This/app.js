let obj = {
    name : 'Lokesh chaudhary',
    evs : 90,
    cn : 90,
    wed : 100,
    Math : 10,
    Total : function (){ // Methods
        
        return(this.evs + this.cn + this.wed + this.Math);
    },
    bulao : function(){
        
        return(`${this.name} ko bulao`);
    }
}
console.log(obj.Total());
console.log(obj.bulao());