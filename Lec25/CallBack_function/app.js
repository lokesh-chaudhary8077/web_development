function getboolean(item){
    return typeof item === 'boolean';
}
function getnum(item){
    return typeof item === 'number';
}
function getstr(item){
    return typeof item === 'string';
}
function check(item,fn){
    return fn(item);

}
console.log(check(true,getboolean));
console.log(check(10,getstr));
console.log(check(19,getnum));