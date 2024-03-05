//Khi người dùng nhập dữ liệu từ hàm prompt->dữ liệu sẽ là kiểu string
let numberA = prompt("Nhập một số bất kì:");
console.log(typeof numberA);

//Đối với phép cộng một số với 1 chuỗi, JS sẽ hiểu là cộng chuỗi
let numberB=10;
let kq=numberA + numberB;
console.log(`Kết quả A+B: ${kq}`);
console.log(typeof kq);

//Đối với các phép tính khác, JS sẽ cố gắng chuyển thành kiểu số trước 
// khi thực hiện tính toán.Nếu không chuyển được sang số thì kết quả sẽ là NaN(not a number)
console.log(numberA*numberB);
console.log(numberA/numberB);
console.log(numberA%numberB);
//-->Cân ép kiểu trước khi xử lý tính toán

//Ép kiểu
//Ép sang kiểu nguyên
let numberC=parseInt(prompt("Mời nhập số C:"));
console.log(numberC);
console.log(typeof numberC);

//Ép kiểu thực
let numberD=parseFloat(prompt("Mời nhập số D:"));
console.log(numberD);
console.log(typeof numberD);

//Ép kiểu number
let numberE=Number(prompt("Mời nhập số E:"));
console.log(numberE);
console.log(typeof numberE);

console.log(numberC+numberD+numberE);
