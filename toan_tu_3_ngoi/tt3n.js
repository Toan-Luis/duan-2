//Toán tử ba ngôi
//Biến = bieuthuc1 ? bieuthuc2 : bieuthuc3;
//Kiểm tra biểu thức 1,nếu đúng->thực hiện bieuthuc2, còn nếu sai->thực hiện bieuthuc3

//Ví dụ:
// let soA = parseInt(Math.random() * 30);
// let message = soA % 2 === 0 ? "số chẵn" : "số lẻ";
// console.log(`Số ${soA} là ${message}`);

//Ví dụ:Viết chương trình nhập vào điểm trung bình và xuất ra kết quả xếp loại của học sinh
//và dùng toán tử 3 ngôi
let đTb = Number(prompt("Mời bạn nhập điểm:"));
let xeploai;
if (đTb >= 0 && đTb <= 10) {
xeploai = đTb >= 8 ? "giỏi" : (đTb >= 6.5 ? "khá" : (đTb >= 5 ? "trung bình" :"yếu"));
}
else { console.log("Nhập điểm sai") }
console.log(xeploai);