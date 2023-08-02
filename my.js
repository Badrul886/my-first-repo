let a = 10;
let b = 19;
let c = add(a,b);
console.log(c);
function add(a,b) {
    if(a+b>10) {
        console.log("too much");
    }
    return a+b;
}