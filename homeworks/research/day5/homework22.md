## _call, apply, bind Nedir? Aralarındaki farklar nelerdir?_

JavaScript'te call, apply ve bind metodları, fonksiyonların çalışma zamanında this bağlamını belirlemek ve fonksiyonları çağırmak için kullanılan yöntemlerdir. Bu metodlar, this bağlamını belirlemek ve argümanları farklı şekillerde iletmek için kullanılır. İşlevsellikleri ve kullanımları arasında bazı farklılıklar vardır:

### `call()` Metodu:

- `call()` metodu, bir fonksiyonu çağırırken belirli bir `this` bağlamıyla çalıştırmak için kullanılır. Ayrıca, fonksiyona parametreleri argüman olarak geçirebiliriz.

- `call()` metodu, ilk parametre olarak belirtilen değer `this` bağlamı olarak atanır ve ardından diğer parametreler fonksiyona argüman olarak geçirilir.

```
function selam() {
    console.log(`Merhaba, ${this.name}`);
}

const obj = { name: "Ahmet" };
selam.call(obj); // "Merhaba, Ahmet" çıktısını verir

```


### `apply()` Metodu:

- `apply()` metodu, `call()` gibi bir fonksiyonu çağırırken belirli bir `this` bağlamıyla çalıştırmak için kullanılır. Ancak, apply() farklı olarak, fonksiyona argümanları bir dizi olarak iletmemizi sağlar.

- `apply()` metodu, ilk parametre olarak belirtilen değer `yhis` bağlamı olarak atanır ve ikinci parametre olarak bir dizi (array) olarak verilen argümanlar fonksiyona geçirilir.

```
function selam(greet) {
  console.log(`${greet}, ${this.name}`);
}

const obj = { name: "Ayşe" };
selam.apply(obj, ["Merhaba"]); // "Merhaba, Ayşe" çıktısını verir

```


### `bind()` Metodu: 

- `bind()` metodu, bir fonksiyonun belirli bir `this` bağlamına sabitlenmesini sağlar. Bu metod, bir fonksiyonun yeni bir kopyasını oluşturur ve bu kopyanın `this` bağlamını belirli bir değere sabitler.

- `bind()` kullanıldığında, ilgili fonksiyonun belirli bir `this` bağlamına sahip olması amaçlanır, ancak fonksiyon hemen çağrılmaz.

```
function selam() {
  console.log(`Merhaba, ${this.name}`);
}

const obj = { name: "Can" };
const func = selam.bind(obj);
func(); // "Merhaba, Can" çıktısını verir

```

> Farklar:

> call() ve apply() anında bir fonksiyon çağrısı yapar ve this bağlamını belirlerken, bind() ise yeni bir fonksiyon oluşturur ve this bağlamını sabitler, ancak fonksiyonu hemen çağırmaz.

> call() ve apply() arasındaki fark, fonksiyon çağrısında argümanların aktarılma şeklidir. call() direkt argümanlarla, apply() ise bir dizi ile argümanları alır.

> bind(), yeni bir fonksiyon kopyası oluşturarak, this bağlamını sabitler ve daha sonra bu fonksiyonun çağrılması gerektiğinde kullanılır.

![Image](https://miro.medium.com/v2/resize:fit:720/format:webp/1*7Kt397qVGkLwjfFp0u91og.png)