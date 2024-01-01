## _debugger Nedir?  Ne İş Yapıyor?_


### debugger:

- debugger bir JavaScript ifadesidir ve hata ayıklama (debugging) sürecinde kullanılır. Bu ifade, kodun belirli bir noktasında çalışmayı durdurarak, geliştiricilere ilgili kod satırının çalışması sırasında değişken değerlerini inceleme ve kod akışını adım adım takip etme fırsatı verir.


- debugger ifadesini JavaScript koduna eklemek, tarayıcı veya geliştirme ortamının hata ayıklama modunda çalışırken, belirli bir noktada kodun durmasını sağlar. Bu noktada, geliştirici tarayıcı tarafından sağlanan hata ayıklama araçlarıyla (browser developer tools) değişkenlerin değerlerini gözlemleyebilir, adım adım kodun işleyişini takip edebilir ve potansiyel hataları tanımlayabilir.

Kullanımı oldukça basittir: 

```
function calculateTotal(a, b) {
    debugger; // Bu satırda kod çalışmayı durduracak
    let total = a + b;
    return total;
}

let result = calculateTotal(5, 10);
console.log(result);

```

> Bu örnek kodda, debugger ifadesi calculateTotal fonksiyonunun içinde belirli bir noktada kodun çalışmasını durdurur. Tarayıcı geliştirici aracı (Chrome DevTools, Firefox Developer Tools gibi) etkinleştirildiğinde veya hata ayıklama modunda çalıştırıldığında, kod bu noktada durur ve geliştirici bu noktada değişkenleri kontrol edebilir, kodun her adımını takip edebilir ve hataları tespit edebilir.

### debugger: 
- debugger ifadesi, geliştiricilere hata ayıklama sürecinde yardımcı olur ve potansiyel hataları bulmalarına ve kodlarını daha iyi anlamalarına olanak tanır. Ancak, canlı ortamlarda veya üretimde çalışan kodda debugger ifadesi kullanılması önerilmez, çünkü bu durumda kodun normal çalışması durabilir ve kullanıcılara olumsuz etkisi olabilir. Bu nedenle, hata ayıklama amacıyla kullanıldıktan sonra debugger ifadesi koddan kaldırılmalıdır.


![Image](https://sjinnovation.com/sites/default/files/pictures/blog-post/debug-1024x646.jpg)