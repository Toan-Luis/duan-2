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

//Hàm Math.min() và Math.max() tìm giá trị lớn nhất và nhỏ nhất trong các giá trị đưa vào
let num1 = 5, num2 = 7, num3 = -10;
console.log(`Giá trị nhỏ nhất của dãy số ${num1}, ${num2}, ${num3} là ${Math.min(num1, num2, num3)}`);
console.log(`Giá trị lớn nhất của dãy ${num1}, ${num2}, ${num3} là ${Math.max(num1, num2, num3)}`);

//Hàm Number(value)_chuyển value sang kiểu số, nếu không chuyển được trả về NaN nhưng giá trị này vẫn có kiểu number
let soH = "15032005";
console.log(`Số H là ${Number(soH)}`);
let chuoiH = "Đây là chuỗi";
console.log(Number(chuoiH));

//Hàm isNaN_kiểm tra xem giá trị truyền vào có phái số hay không
//Step1:Cố gắng chuyển về kiểu number
//Step2:nếu biểu thức nhập vào không phải số hoặc không thê chuyển đổi sang số thì trả về true và ngược lại
let soK = 123, chuoiB = "chuoi";
console.log(isNaN(soK));
console.log(isNaN(chuoiB));
console.log(isNaN(true)); //trả về false vì true ép kiểu ra 1, tương tự với false
console.log(isNaN(null));
console.log(isNaN(""));
console.log(isNaN(" "));

//Hàm Number.isNaN_kiểm tra xem giá trị có đúng là NaN hay không
//Đúng thì trả về true, không thì trả về false
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("abc"/"mnh"));
console.log(Number.isNaN(0/0));
console.log(Number.isNaN({}));
console.log(Number.isNaN("chuoi"));

//Hàm Math.radom()_lấy số ngẫu nhiên trong nửa khoảng [0,1)
console.log(Math.random());
//Muốn làm xuất hiện số ngẫu nhiên lớn hơn 1 thì chỉ cần nhân 10
console.log(Math.random()*10);
//Muốn làm xuất hiện số nguyên lơn hơn 1 thì ép kiểu số thực lơn hơn 1 về số nguyên
console.log(parseInt(Math.random()*10));
//=>Muốn tạo ra một số nguyên ngẫu nhiên trong nửa khoảng [0,a) bất kì chỉ cần nhân với a
//=>Ta có thể tự tính toán ra các khoảng giá trị mong muốn như:
console.log(parseInt(Math.random()*50+10)); //lấy radom từ [0,59]


