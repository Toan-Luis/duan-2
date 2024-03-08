//Vòng lặp while
/* while(điều kiện){
    lệnh
} */
//kiểm tra điều kiện->đúng->thực hiện lệnh->kiểm tra điều kiện...->sai->dừng vòng lặp

//Ví dụ: dùng vòng lặp while in ra màn hình các số tự nhiên từ 1->10
// let i1 = 1;
// while (i1 <= 10) {
//     console.log(i1);
//     i1++;
// }

//Ví dụ:Viết chương trình nhập vào số nguyên từ 1->99,nhập sai bắt nhập lại
// let nhap = prompt("Nhập 1 số nguyên từ 1->99:");
// while (nhap % 1 !== 0 || nhap > 99 || nhap < 1 || isNaN(nhap)) {
//     nhap = prompt("Nhập sai giá trị, mời nhập lại:");
// }
// console.log(nhap);

//Vòng lặp do while
/* do{
    lệnh 
}while(điều kiện) */
//Thực hiện lệnh->kiểm tra điều kiện->đúng->thực hiện lệnh...->sai->dừng lặp

//Ví dụ: dùng vòng lặp do while in ra màn hình các số tự nhiên từ 1->10
// let i2=1;
// do{
//     console.log(i2);
//     i2++;
// }while(i2<=10)

//Nếu điều kiện của 2 vòng lặp trên là luôn đúng thì sẽ tạo ra 1 vòng lặp vô tận
//Để thoát khỏi vòng lặp vô tận ta dùng break
// let i3 = 0;
// while (true) {
//     i3++;
//     console.log(i3);
//     if (i3 === 15) {
//         break;
//     }
// }

//Vòng lặp for
/* for(Khởi_tạo;Điều_kiện;Bước_lặp){
    lênh
} */
//khởi tạo->kiểm tra điều kiện->đúng->lệnh->bước lặp->điều kiện->lệnh....->điều kiện->sai->kết thúc

//Ví ụ: Xuất ra màn hình các số tự nhiên từ 1-<10 dùng for
for (i4 = 1; i4 <= 10; i4++) {
    console.log(i4)
}