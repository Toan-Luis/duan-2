//Cú pháp:
/* function Tên_hàm(tham_số) {
    code
}*/
function showalert() {
    alert("Hello world");
}
showalert();

function tong(a,b) {
    console.log(`Tổng của a và b là ${a+b}`);
}
//gọi là tham số khi tạo hàm
tong(2,3);
//gọi là đối số nếu gọi hàm
//a,b có thể là kiểu string hoặc number

//Đối tượng arguments: Cho phép nhập sô biến tại nơi gọi hàm
function writelog1() {
    console.log(arguments);
}
writelog1("Toản", "2005", 15, 3);

//for of
function writelog2() {
    let myString=``;
    for(let param of arguments) {
        myString+=`${param}-`;
    }
    console.log(myString);
}
//lấy giá trị đầu tiên của arguments gắn cho param->chạy code->lấy giá trị thứ 2...->cho đến khi hết giá trị

writelog2("giá trị 1", 2, "blabla");