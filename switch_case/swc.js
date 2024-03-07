//switch case trong JS
/* switch(Biểu thức){
    case giá-trị1: lệnh 1; break;
    case giá_trị2: lệnh 2; break;
    ...
    default: lệnh này được thực thi nếu không có giá_trị nào thỏa mãn
} */

//Ví dụ: Nhập vào 1 số tự nhiên bất kì, xác định xem nó là chẵn hay lẻ, sử dụng switch
let num1 = parseInt(prompt("Nhập một số tự nhiên:"));
switch (num1 % 2) {
    case 1: console.log("Là số lẻ"); break;
    case 0: console.log("Là số chẵn"); break;
    default: console.log("Không phải số")
}

//Ví dụ: nhập vào 1 tháng và xuất ra số ngày của tháng đó
// giả dụ tháng 1,3,4,5 có 30 ngày, tháng 6,7,8,9,10,11,12 có 31 ngày và tháng 2 có 28 ngày

let thang = parseInt(prompt("Nhập vào 1 tháng (1-12):"));
switch (thang) {
    case 1:
    case 3:
    case 4:
    case 5:
        console.log("Tháng có 30 ngày"); break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        console.log("Tháng có 31 ngày"); break;
    case 2:
        console.log("Tháng có 28 ngày"); break;
    default:
        console.log("nhập sai tháng");
}

//Ví dụ: Viết chương trình khung tìm kiếm:cho người dùng nhập và lựa chọn
/* 1. tìm theo tên
   2. tìm theo tác giả
   3. tìm theo tiêu đề
   4. tìm theo nhà xuất bản
   thóa nếu phím bấn không hợp lệ
*/
let chon = Number(prompt(`
Chọn cách tìm kiếm:
1. tìm theo tên
2. tìm theo tác giả
3. tìm theo tiêu đề
4. tìm theo nhà xuất bản
`));

switch (chon) {
    case 1: alert("Bạn đã chọn tìm theo tên"); break;
    case 2: alert("Bạn đã chọn tìm theo tác giả"); break;
    case 3: alert("Bạn đã chọn tìm theo tiêu đề"); break;
    case 4: alert("Bạn đã chọn tìm theo nhà xuất bản"); break;
    default: alert("Cách tìm không hợp lệ")
}