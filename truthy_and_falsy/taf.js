//Trong js, một số giá trị được coi là falsy(giá trị sai)
//Những giá trị này khi chuyển đổi sang kiểu boolean sẽ mang giá trị false
//Nhũng giá trị không phải falsy được coi là truthy(giá trị đúng)

//8 giá trị khi chuyển sang boolean mang giá trị false:
//false,0,-0,0n,"",null,undefined,NaN

let a=Boolean(false);
console.log(a);
console.log(typeof a);

let b=Boolean(0);
console.log(b);
console.log(typeof b);

let c=Boolean(NaN);
console.log(c);
console.log(typeof c);

let d=Boolean("");
console.log(d);
console.log(typeof d);

//....