// Homeworks 

let sayilar = [-12, 11, 111, 33, 22, 55, 44, 66, 77, 99]

// s1-) Bu sayılardan en küçüğü nedir ? (min)
console.log(Math.min(...sayilar))
console.log(Math.min(100, 500, -9));
// s2-) Bu sayılardan en büyüğü nedir ? (max)
console.log(Math.max(...sayilar))
// s3-) Bu sayılardan en büyüğü karekökü nedir ? (sqrt(max))
let maxNumber = Math.max(...sayilar)
console.log(Math.sqrt(maxNumber))
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ? (ceil(sqrt(max)))
console.log(Math.ceil(Math.sqrt(maxNumber)))
// s5-) Bu sayılardan en küçüğü mutlak değeri nedir ? (abs(min))
let minNumber = Math.min(...sayilar)
console.log(Math.abs(Math.abs(minNumber)))
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım(pow(min,max))
console.log(Math.pow(minNumber, maxNumber))

// Örnek: Aşağıdaki örnekleri math ile çözelim ?

// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
let exampleNumberOne = -5.9
// 1-mutlak değeri alsın 5.9 (Math.abs)
console.log(Math.abs(exampleNumberOne))
// 2-yukarı yuvarlama yapsın  6.0 (Math.ceil)
console.log(Math.ceil(exampleNumberOne))

// 3-karesini alsın 36.00 (Math.pow(sayı,2))
console.log(Math.pow(Math.ceil(Math.abs(exampleNumberOne)), 2)) //Negatif sayıların karekökü gerçekte geçersizdir. Math.sqrt() negatif bir sayıda NaN döndürecektir.

// 4-çıkan sayının karekökü alsın (Math.sqrt(sayı))
console.log(Math.sqrt(Math.pow(Math.ceil(Math.abs(exampleNumberOne)), 2)))
// 6-)çıkan sonucu 5 bölsün 6/5=1
console.log(Math.sqrt(Math.pow(Math.ceil(Math.abs(exampleNumberOne)), 2)) / 5)
console.log("------------------------------------------")
// kullanıcı tarafından girilen bir kelimenin (prompt)
let userData = prompt("Lütfen bir şeyler yaziniz");

// S-1) Kaç karakterlidir ? (length)
console.log(userData.length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
console.log(userData.replace(/\s/g, "").length)
console.log(userData.trim().length)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
console.log(userData.toUpperCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
console.log(userData.toLowerCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
let words = userData.split(" ")
if (words.length > 0) {
    let firstWord = words[0]; // İlk kelimeyi alalım
    let modifiedSentence = userData.replace(firstWord, "javascript")
    console.log(modifiedSentence)
} else {
    console.log("Lütfen geçerli bir cümle girin!")
}
console.log(userData.replace("javascript", "xxxxxxx"))

console.log(userData.replace(userData.substring(0, userData.indexOf(" ")), "javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
console.log(userData.startsWith("javascript"))
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
console.log(userData.endsWith("javascript"))
// S-8) ilk harf nedir  ? (charAt())
console.log(userData.charAt(0))
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
console.log(userData.concat("-ben js öğreniyorum"))
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())
console.log(userData.substring(0, 4))