//Câu lệnh điều kiện if_else
/* if(Điều kiện){
        <khối lệnh khi Điều_kiện đúng>}
    else{
        <Khối lệnh khi Điều_kiện sai>}

else là không bắt buộc
*/
//Ví dụ:
let đtb = parseFloat(prompt("Mời bạn nhập điểm"));
if (đtb >= 5.0) { console.log("Bạn đã qua môn"); }
else { console.log("Bạn tạch cmnr!!") }

//Ví dụ 2:
let score = parseFloat(prompt("Mời nhập điểm"));
if (score <= 10 && score >= 8) { 
    console.log("Học sinh giỏi") 
} else if (score < 8 && score >= 6.5) { 
    console.log("Học sinh khá") 
} else if (score < 6.5 && score >= 5) { 
    console.log("Học sinh trung bình") 
} else if (score < 6 && score >= 0) { 
    console.log("Học sinh yếu") 
} else { 
    console.log("nhập sai điểm") 
}
