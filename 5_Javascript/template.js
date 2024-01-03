// JS Konular 

NaN
console.log(4 / 4);
console.log(4 / "4");
console.log(4 / "abc");

// Infinity 
console.log(0 / 5);
console.log(5 / 0);

// New: Doğmak
// Null: Vefat
// Zero: 0
// isNaN:
//     console.log(isNaN(4 / 4));
// console.log(!isNaN(4 / 4));

// Undefined 
let data3;
console.log(data3);
// undefined : değer hiç verilmemiş 
// null      : değer verilmiş ancak biz bilerek bu değeri,değersiz vermek için


// Math Ödev
// Kullanıcıda tarafından aldığımız 2 tane sayının (prompt)
// let numberOne = prompt("Enter First Number")
// let numberTwo = prompt("Enter Second Number")
// let sayilar = [numberOne, numberTwo]

// Math
console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(25));
console.log(Math.pow(2, 5));
console.log(2 ** 5);
console.log(Math.abs(-10));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.round(9.4));
console.log(Math.round(9.5));
console.log(Math.min(100, 500, -9));
console.log(Math.max(100, 500, -9));
console.log(Math.sin(1));
console.log(Math.cos(1));

// Sayısal İşlemler
let number = 44;
number = 44.4252;
console.log(number);
console.log("Number: " + Number(number));
console.log("parseInt: " + parseInt(number));
console.log("parseFloat: " + parseFloat(number));
// NaN 
// isNaN
console.log(typeof number);

let bilimsel1 = 1400000;
console.log(bilimsel1);

let bilimsel2 = 14E+5;
console.log(bilimsel2);

let bilimsel3 = 14E-5;
console.log(bilimsel3);

// binary(2)
let binary = 0b01010;
console.log(binary);

// octal(8)
let octal = 0o7523;
console.log(octal);

// hexadecimal(16) 0123456789abcdef
let hexadecimal = 0xff09;
console.log(hexadecimal);

const number22 = 56.123456789;
console.log(number22);
console.log(typeof number22);
console.log(number22.toFixed(3));
console.log(number22.toPrecision(3));

// Metinsel işlemler

let number1 = 455
let number2 = 455.41;
let str = "455.41";
let bol = true;

let vocabulary = "js ÖĞReniyorum js ";
console.log(vocabulary);
console.log(vocabulary.length);
console.log(vocabulary.trim().length);

console.log(vocabulary.toLowerCase());
console.log(vocabulary.toUpperCase());

console.log(vocabulary.substring(5));
console.log(vocabulary.substring(5, 8)); // 5<=X<=8-1

console.log(vocabulary.charAt(0));
console.log(vocabulary.indexOf("js"));
console.log(vocabulary.lastIndexOf("js"));
console.log(vocabulary.includes("js"));

console.log(vocabulary.replace("js", "javascript"));
console.log(vocabulary.concat("-sona"));
console.log(vocabulary + "-sona");

console.log(vocabulary.startsWith("js"));
console.log(vocabulary.endsWith("js"));

/////////////////////////////////////////////////////

//Function

function firtsFunction() {
    console.log("Benim Adim Serhat")
}
firtsFunction()

function powFunction(a, b) {
    return Math.pow(a, b);
}

console.log(powFunction(2, 5))

let powfunction = (a, b) => {
    return Math.pow(a, b);
}
console.log(powfunction(2, 5))

// Arrows Function
let arrowfunction = (data) => {
    console.log("arrow function " + data);
}
arrowfunction("asd")

/////////////////////////////////////////////////////
// Conditional 

let conditional = (data) => {
    let number = 5;
    if (number > 0) {
        console.log("Positive Number")
    } else [
        console.log("Negative Numer")
    ]
}
conditional()

let ternary = (data) => {
    let number = 5;
    const result = (number > 0) ? "pozitiftir" : "negatif";
    console.log(result);
}
ternary()

let ifConditional = (veri) => {
    let sayi = -3;
    const result = (sayi > 0) ? "positif" : "negatif yaz"
}

// Conditional  Else if 
let conditional2 = (data) => {
    let number = parseInt(Number("4"));
    if (number == 0) {
        console.log("0");
    } else if (number == 1) {
        console.log("1");
    } else if (number == 2) {
        console.log("2");
    } else if (number == 3) {
        console.log("3");
    } else if (number === 4) {
        console.log("4");
    } else if (number == 5) {
        console.log("5");
    } else {
        console.log("1<=X<=5 dışında");
    }
}
conditional2();

// Swich- case yapisi
let conditional3 = (data) => {
    let number = parseInt(Number("4"));
    switch (number) {
        case 0:
            console.log("0");
            break;
        case 1:
            console.log("1");
            break;
        case 3:
            console.log("3");
            break;
        case 2:
            console.log("2");
            break;
        case 4:
            console.log("4");
            break;
        case 5:
            console.log("5");
            break;
        default:
            console.log("1<=X<=5 dışında");
            break;
    }
}
conditional3();

////////////////////////////////////////////////////

// Loop
let forLoop = () => {
    for (let i = 1; i <= 5; i++) {
        window.document.writeln("i: " + i + "<br/>");
    }
    // for(;;){}
}
forLoop();
window.document.writeln("*************** <br/>");

let whileLoop = () => {
    let i = 1;
    while (i <= 5) {
        window.document.writeln("i: " + i + "<br/>");
        i = i + 1;
    }
    // while(true){}
}
whileLoop();

window.document.writeln("*************** <br/>");
let doWhileLoop = () => {
    let i = 1;
    do {
        window.document.writeln("i: " + i + "<br/>");
        i = i + 1;
    }
    while (i <= 5);
    //while(true){}
}
doWhileLoop();

/////////////////////////////////////////////////////////////
// Exception Handling
// const exception = () => {
//     try {
//         alertx("Alert");
//     } catch (err) {
//         console.error(err);
//         // throw
//         throw new Error("zorunlu istisna yaptım");
//     } finally {
//         console.log("Ekranda göster Mutlaka");
//     }
//     console.log("son satır");
// }
// exception();

// Try Catch yapisi ornekleri 

let items;

try {
    items.forEach(item => console.log(item));

} catch (hata) {
    console.log("hata bu: " + hata)
    items = [1, 2, 3, 4]
    items.forEach(item => console.log(item));
}


console.log("hata yonetimi duzgun çalısıyrır")

let info = "Serhat"
console.log(info)

try {
    let num = -8;
    if (num > 10) {
        throw "Sayı 10'dan büyük olamaz!";
    }
} catch (error) {
    console.log("Hata yakalandı: " + error);
}


try {
    console.log("Try bloğu içindeyim.");
    throw "Bu bir hata mesajıdır!";
} catch (error) {
    console.log("Hata yakalandı: " + error);
} finally {
    console.log("Finally bloğu çalıştı.");
}


/////////////////////////////////////////////
// setTimeout(): sadece 1 kere çalışır ve sonra durur.
let setTimeoutFunction = () => {
    setTimeout(() => {
        console.log("setTimeoutFunction 5 saneiye sonra çalıştı");
    }, 5000);
}
// setTimeoutFunction();

// setInterval():  ssürekli çalışır
let setIntervalFunction = () => {
    setInterval(() => {
        console.log("setInterval 2 saniye sonra çalışsın ve devam etsin");
    }, 1000);
}
// setIntervalFunction();

// setTimeout ve setInterval function beraber kullanmak
let setTimeoutAndIntervalFunction = () => {

    Function
    const clockData = () => {
        console.log("1.saniye");
    }

    // setInterval function: Sürekli çalışsın
    let intervalID = setInterval(clockData, 1000);

    // 1 dakika sonra dursun.
    // setTimeout(): sadece 1 kere çalışır ve sonra durur.
    // 60 * 60 * 24 * 365
    const time = parseInt(60);
    setTimeout(() => {
        clearInterval(intervalID);
        console.log(time + " zaman sonra durdu.");
    }, 1 * 1000 * time);
}
// setTimeoutAndIntervalFunction();


/////////////////////////////////////////////////////////////

// call back function
const callBackFunction = () => {
    // 1.Function
    let birinci = (data) => {
        return Math.sqrt(data)
    }

    // 2.Function
    let ikinci = (xyz) => {
        // let userData2 = parseInt(prompt("Lütfen bir sayı giriniz"));
        let userData3 = 25
        const result = xyz(userData3);
        console.log(result);
    }
    ikinci(birinci);
}
callBackFunction()

// promise
// const promiseFunction = () => {
//     const isLogin = true;
//     const isCreated = 201;
//     let pro = new Promise((resolve, reject) => {
//         if (isLogin && isCreated == 201)
//             resolve("olumlu sonuç");
//         else
//             reject("olumsuz sonuç");
//     }).then(() => { // new Promise eğer sonuç geldiyse then çalışsın
//         console.log("Then");
//     }).catch(() => { // new Promise eğer sonuç olumsuzsa catch çalışsın
//         console.error("catch");
//     });
//     console.log(pro);
// }
// promiseFunction()

/////////////////////////////////////////////////////////////
//Diziler 
// Rastgele 8 sayı üretmek için bir dizi oluştur
function rastgeleSekizSayiUret() {
    var dizi = [];
    for (var i = 0; i < 8; i++) {
        var rastgeleSayi = Math.floor(Math.random() * 9) + 1; // 1 ile 9 arasında rastgele sayı üret
        dizi.push(rastgeleSayi); // Diziye rastgele sayıyı ekle
        document.writeln(rastgeleSayi)
    }
    return dizi;
}
// Rastgele 8 sayı üret
var rastgeleSekizSayilar = rastgeleSekizSayiUret();
// Oluşturulan rastgele 8 sayıyı göster
console.log(rastgeleSekizSayilar);

let arrayFunction = () => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
    console.log(array)
}

arrayFunction()