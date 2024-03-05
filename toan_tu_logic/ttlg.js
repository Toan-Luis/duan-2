//Toán tử logic

//Toán tử &&(AND),trả về true khi tất cả đều đúng,false nếu một cái sai
let x = 7;
console.log(x > 0 && x < 10);

//Toán tử ||(OR),trả về true khi có ts nhất một cái đúng
let y=3;
console.log(y>0 || y<2);

//Toán tử !(NOT),là toán tử phủ định(đảo ngược giá trị)
let z=true;
console.log(!z);

//Bài tập vận dụng:
//Bài 1:Tính chu vi,diện tích hình tròn.Viết chương trình nhập vào từ bàn phím bán kính r của đường tròn, in ra kết quả
//a.Chu vi
//b.Diện tích
let r=parseFloat(prompt("Nhập bán kính r:"));
let pi=Math.PI;
let cV=2*pi*r;
let dT=pi*r*r;
console.log("Chu vi của hình tròn là:" + cV.toFixed(3));
console.log("Diện tích của hình tròn:", dT.toFixed(3));

//Bài 2:Tính chu vi,diện tích hình chữ nhật
//1.Viết chương trình nhập vào 2 số thực dương a,b từ bàn phím,a là chiều dài b là chiều rộng
//2.In ra màn hình chu vi và diện tihcs của hình chữ nhật đó
let a=Number(prompt("Nhập chiều dài của hình chữ nhật:"));
let b=Number(prompt("Nhập chiều rộng của hình chữ nhật:"));
let cV2=2*(a+b);
let dT2=a*b;
console.log(`Chu vi của hình chữ nhật là:${cV2.toFixed(3)}`);
console.log(`Diện tích của hình chữ nhật là:%s`, dT2.toFixed(3));

