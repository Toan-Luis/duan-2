//Toán tử gán

//Toán tử gán (=). Gán 1 giá trị cho biến
let x=10, y=20, z=x+y;
console.log(z);

//Gán +=, *=, /=, %=
let m=5;
m+=5; //m=m+5
console.log(m);

let n=9;
n-=3; //n=n-3
console.log(n);

let q=10;
q/=2; //q=q/2
console.log(q);

let p=20;
p%=3; //p=p%3
console.log(p);

/*Bài tập:Thực hiện các phép toán gán và in ra kết quả
  e=5,f=2
  rút gọn: e=e-(f+1)*/
let e=5, f=2;
console.log("e=", 5);
console.log("f=", f);
e-=(f+1);
console.log(e);