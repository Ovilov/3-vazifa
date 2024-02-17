let yosh = prompt("Yoshingizni kiriting !");

if (yosh > 17 && yosh < 28) {
  console.log("Siz harbiy hizmatga bora olasz !");
} else if (yosh < 18) {
  console.log(
    "Sizning yoshingiz to'g'ri kelmadi. Siz ",
    18 - yosh,
    " yildan keyin bora olasiz ! "
  );
} else {
  console.log(
    "Sizning yoshingiz to'g'ri kelmadi. Siz ",
    yosh - 27,
    "yil avval murojat qilishingiz kerak edi !"
  );
}

//

let son1 = Number(prompt("Birinchi raqamni kiriting:"));
let son2 = Number(prompt("Ikkinchi raqamni kiriting:"));
let amal = prompt("Amalni kiriting:");

if (amal == "+") {
    alert(son1 + son2);
}else if (amal == "-") {
    alert(son1 - son2);
}else if (amal == "*") {
    alert(son1 * son2);
}else if (amal == "/") {
    alert(son1 / son2);
}else if (amal == "**") {
    alert(son1 ** son2);    
}else {
    alert("Bunday amal mavjud emas!!!")
}