//Các cách xuất dữ liệu với biến trong js
let bienA=5;
let bienB=25;
let chuoi1="Kết quả:"

//Cách 1:
console.log("Căn bậc hai của " + bienA + " là " + bienB);

//Cách 2:Cách này sẽ tự động cho dấu cách sau dấu phảy,để biến kiểu dữ kiệu ở đầu sẽ ra hiệu ứng khác
console.log("Căn bậc hai của", bienA, "là", bienB);

//Cách 3:Ghi như nào ra như vậy
console.log(`Căn bậc hai của ${bienA} là ${bienB}`);

//Cách 4:%s sẽ thế theo thứ tự trái qua phải
console.log(`Căn bậc hai của %s là %s`, bienA, bienB);

//Ví dụ:cho a=4,b=3,kq=a*b xuất ra màn hình "4 nhân 3 bằng 12" sử dụng 4 cách đã học.
let a=4, b=3, kq=a*b;
console.log(chuoi1 + a + " nhân " + b + " bằng " + kq);
console.log(chuoi1, a, "nhân", b, "bằng", kq);
console.log(`${chuoi1} ${a} nhân ${b} bằng ${kq}`);
console.log(`%s %s nhân %s bằng %s`,chuoi1, a, b, kq);