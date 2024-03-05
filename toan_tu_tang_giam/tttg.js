//Toán tử tăng/giảm: Toán tử tiền tố, hậu tố(++,--)
//Trong phép tính đơn lẻ thì viết ++ hay -- ở sau biến đều được
let a=99,b=101,c=89,d=91;
a++;
b--;
++c;
--d;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//Trong biểu thức phức tạp thì sẽ có quy tắc riêng.
//Quy tắc dấu++,--:
//a++, a-- là Postfix
//++a, --a là Prefix
//Ưu tiên tính toán:
//Step 1: Prefix
//Step 2: Các phép toán còn lại
//Step 3: Gán giá trị cho biến ở bên trái dấu bằng
//Step 4: Tính postfix

let x=1,y=2;
let z= x++ - ++y +1;
console.log(x);
console.log(y);
console.log(z);
/*Step1: ++y->y=3
  Step2: x=1,y=3->1-3+1=-1
  Step3: x=-1
  Step4: x++->x=2*/