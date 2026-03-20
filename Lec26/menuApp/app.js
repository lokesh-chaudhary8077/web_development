let menu = ['palak paneer','chole chawal','chicken dhatura','panner butter','manchurian','chicken biryani','pizza','egg','soda'];
function isVeg(){
    if((food.toLowerCase().indexOf('checken') !== -1) || (food.toLowerCase().indexOf('egg') !== -1)){
        return false;

    }
    return true;
}
let vegMenu = menu.filter(isVeg);
console.log(menu)
console.log(vegMenu);
