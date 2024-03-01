//Toán tử so sánh
let a = 1, b = 2, c = "1";

// != (Khác nhau)
console.log(a != b);
console.log(a != a);

//>,< (lớn hơn,nhỏ hơn)
console.log(a > b);
console.log(a < b);


// >=;<=(lớn hơn/nhỏ hơn hoặc bằng)
console.log(2 >= 2);
console.log(3 <= 3);

// ==(bằng nhau_chỉ so sánh giá trị,không quan tâm kiểu dữ liệu)
//tuân theo quy tắc ép kiểu ngầm định
console.log(c == a);

// ===(so sánh cả kiểu dữ liệu và giá trị)_không tuân theo quy tắc ép kiểu ngầm định
console.log(c === a);
