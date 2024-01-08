## _any and unknow keywords Nedir?_

`any` ve `unknown`, TypeScript dilinde kullanılan tiplerdir ve JavaScript'te bulunmayan, TypeScript'in sunduğu özelliklerdir.

### any:

- `any`, TypeScript'te herhangi bir türü temsil etmek için kullanılan bir türdür. Bu tür, derleyicinin herhangi bir tür kontrolü yapmadan değişkenlere herhangi bir tür atanabilmesine olanak sağlar.

- `any` türü, tip güvenliği açısından zayıf olduğundan, genellikle tip bilinmeyen veya belirli bir türle çalışmanın zor olduğu durumlarda kullanılır. Ancak, `any` kullanmak, TypeScript'in sağladığı tip güvenliği avantajlarını kaybetmenize neden olabilir.

```
let degisken: any;

degisken = 5; // Herhangi bir tür atanabilir
degisken = "Merhaba TypeScript"; // Yine herhangi bir tür atanabilir

```

### `unknown`:

- `unknown`, JavaScript'teki `any`'den farklı olarak, daha güvenli bir türdür. `unknown` türü, belirli bir tür bilinmeden gelmiş bir değeri temsil eder.

- `unknown` türü, `any`'den daha tip güvenli bir seçenek sağlar. Bir değişkenin türü `unknown` olarak belirlendiğinde, o değişkenin özelliklerine veya yöntemlerine doğrudan erişim sağlanamaz. Bu değerlerin kullanılabilmesi için önceden bir tür kontrolü veya tür dönüşümü yapılması gerekir.

```
let degisken: unknown;

degisken = 5; // Başlangıçta bilinmeyen bir tür
// Aşağıdaki gibi kontrol yapılmadan doğrudan erişim sağlanamaz:
// console.log(degisken.toFixed()); // Hata! 'toFixed' methodu 'unknown' türünde tanımlı değil

if (typeof degisken === 'number') {
    console.log(degisken.toFixed()); // Tip kontrolünden sonra erişim sağlanabilir
}

```

> Genel olarak, `any` herhangi bir türü temsil ederken, `unknown` daha güvenli bir türdür ve tip kontrolü yapmadan önce tür bilinmeyen değerlerle çalışmayı sağlar. Bu nedenle, mümkünse `unknown` kullanmak, tip güvenliği açısından daha iyidir, ancak belirli durumlarda `any` kullanımı gerekebilir.

![Image](https://i.ytimg.com/vi/hhvfQ1fCrYM/maxresdefault.jpg)
