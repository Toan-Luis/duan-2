//Hàm toán học

//Hàm Math.sqrt(a)_căn bậc 2 của a
let soA = 25;
console.log("Căn bậc hai của " + soA + " là " + Math.sqrt(25));

//Hàm Math.pow(a,b)_a mũ b
let soB = 2, soC = 3;
console.log(`${soB} mũ ${soC} bằng ${Math.pow(2, 3)}`);

//Hàm Math.abs(a)_trị tuyệt đối của a
let soD = -10;
console.log(`Giá trị tuyệt đối của ${soD} là ${Math.abs(soD)}`);

//Hàm Math.ceil_làm tròn lên và Math.floor_làm tròn xuống
let soE = 4.02;
console.log(`${soE} làm tròn lên thành ${Math.ceil(soE)} và làm tròn xuống thành ${Math.floor(soE)}`);

//Hàm Math.round(a)_làm tròn theo quy tắc làm tròn(số thập phân thứ nhất)
let soF = 4.49;
console.log(`Số ${soF} làm tròn thành ${Math.round(soF)}`);

//Hàm .toFixed(a)_làm tròn đến số thập phân thứ a
let soG = 4.12345;
console.log(`Làm tròn số ${soG} đến số thập phân thứ 4 là ${Number(soG.toFixed(4))}`);
//lý do có ép kiểu Number là khi ham .toFixed làm tròn sẽ ép kiểu ngầm định số làm tròn về string

//hàm Math.min() và Math.max() tìm giá trị lớn nhất và nhỏ nhất trong các giá trị đưa vào
let num1 = 5, num2 = 7, num3 = -10;
console.log(`Giá trị nhỏ nhất của dãy số ${num1}, ${num2}, ${num3} là ${Math.min(num1, num2, num3)}`);
console.log(`Giá trị lớn nhất của dãy ${num1}, ${num2}, ${num3} là ${Math.max(num1, num2, num3)}`);



