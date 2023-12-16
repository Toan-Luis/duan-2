//Biến
// Khai báo biến sau đó gán giá trị cho biến
//Lưu ý nếu giá trị là văn bản thì có ''
//với var
var fullName;
fullName = 'Trần Quốc Toản';
//với let
let loveGame;
loveGame = 'AOV';
//khai báo đồng thời gán giá trị cho cho biến
//với var
var age = 18;
//với let
let tuongTu = 'tulen';
//với const(vì const là hằng số nên khi khai bảo phải gán gí trị ngay)
const rankCaoNhat = 'chiến tướng'
//Một số hàm built-in
//alert
alert('cảnh báo');
//console
console.log('đây là dòng log');
console.warn(age);
console.error(tuongTu);
//confirm(thông bảo xác nhận)
confilm('đồng ý?');
//prompt(thông báo có input)
prompt('nhập tuổi của bạn');
//set timeout(hiện thông báo sau một khoảng thời gian)
setTimeout(function(){alert('thông báo')},1000);
//setInterval(lặp lại sau một khoảng thời gian)
setInterval(function(){console.log('đây là sòng log' + Math.random)},1000);
/*Toán tử số học
+ --> Cộng
- --> Trừ
* --> Nhân
** --> Lũy thừa
/ --> Chia
% --> Chia lấy dư
++ --> Tăng 1 giá trị số
-- --> Giảm một giá trị số
*/
//Toán tử ++ và -- với tiền tố và hậu tố
//Tiền tố
var a=6;
++a;
//Việc 1: +1 cho a, a=a+1 => a=7
//Việc 2: Trả về a sau khi +1
console.log(a);
//Hậu tố
a--;
//Việc 1: Tọa ra 'a copy' =6
//Việc 2: Trừ 1 của a, a=a-1 => a=5
//Việc 3: Trả về 'a copy'
console.log(a);