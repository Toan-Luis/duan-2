//1. Tạo mảng
/* Cú pháp
    var/let tên_mảng = [
    Phần_tử_1,
    Phần_tử_2,
    ...
   ]; 
    Mảng có thể chứa tất cả các kiểu dữ liệu trong JS*/

//Ví dụ:
let homeworks = [
    'btToan',
    'btAnh',
    'btKTLT',
    null,
    undefined,
    function () {

    },
];
console.log(homeworks);

/*Cách 2:(không khuyến khích)
    var/let tên_mảng = new Array(
        Phần_tử_1,
        Phần_tử_2,
    );
*/

//Kiểu dữ liệu của mảng là object
console.log(typeof homeworks);
//Cách kiểm tra xem có phải là array hay không
console.log(Array.isArray(homeworks));
//Lý do cần phải kiểm tra vì {},[] cũng có kiểu dữ liệu là object
console.log(typeof []);
console.log(typeof {});

//2.Truy xuất mảng
//Độ dài mảng:
console.log(homeworks.length);
//Lấy phần tử theo index(chỉ mục-key)
console.log(homeworks[0]);

//3.Làm việc với mảng
var languages =[
    'Javascrip',
    'PHP',
    'Ruby',
];
var work =[
    'front-end',
    'back-end',
    'full-stack'
];
//To string():chuyển các phần tử của mảng sang chuỗi
console.log(languages.toString());
console.log(typeof languages);
//join(dấu ngăn cách các phần tử):Biến array thành 1 chuỗi 
console.log(languages.join(' '));
//pop():xóa phần tử ở cuối mảng và trả lại chính phần tử đã xóa
console.log(languages.pop());
console.log(languages);
//Khi mảng rỗn thì trả về undefined
//push():Thêm 1 hoặc nhiều phần tủ ở cuối mảng và trả về độ dài mới của mảng
console.log(languages.push('C++','Java'));
console.log(languages);
//shift():xóa phần tử đầu mảng và trả về phần tử đó
console.log(languages.shift());
console.log(languages);
//Khi xóa hết sẽ trả về undefined
//unshift():Thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới
console.log(languages.unshift('Dart'));
console.log(languages);
//Splice(index):Xóa-chèn phần tử
console.log(languages.splice(1, 2, 'python'));//in ra phần tử xóa
//Chỉ số thứ nhất là vị trí đặt con trỏ, thứ 2 là số phần tử xóa đi kể từ vị trí đó,thứ 3 là thêm phần tử vào
console.log(languages);
//concat():ghép 2 mảng
console.log(languages.concat(work));
//slice(a, b):cắt phần tử của mảng nằm trong  [a,b) và giữ nguyên mảng cũ
console.log(languages.slice(1,3));


