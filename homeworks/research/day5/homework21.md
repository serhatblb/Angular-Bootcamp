#super, this, new keyword nedir ? aralarındaki farklar nelerdir ?
## _super, this, new keyword Nedir? Aralarındaki Farklar Nelerdir?_


### `super`:

- Bir alt sınıfın üst sınıfındaki metodları çağırmak için kullanılır. Özellikle sınıfın yapıcısı (constructor) içinde kullanılarak, üst sınıfın yapıcısını çağırmak için kullanılır.

-Alt sınıfta super.method() kullanarak üst sınıfın metotlarını çağırabiliriz.

```
class UstSinif {
  constructor() {
    this.x = 10;
  }
}

class AltSinif extends UstSinif {
  constructor() {
    super();
    this.y = 20;
  }
  showValues() {
    console.log(this.x); // Alt sınıfın kendi değişkeni
    console.log(this.y); // Alt sınıfın kendi değişkeni
  }
}
```


### `this`:

- O anki nesneye referans veren bir özel bir değişkendir. `this` ile o anki sınıf içindeki değişkenlere, metodlara ve özelliklere erişim sağlanır.

- `this`  kullanılarak o anki nesnenin özelliklerine veya metodlarına erişebiliriz.

```
class OrnekSinif {
  constructor(x) {
    this.x = x;
  }
  showValue() {
    console.log(this.x); // this ile örnek değişkene erişim
  }
}
```


### `new`:

- Bir constructor fonksiyonundan yeni bir nesne oluşturmak için kullanılır. Yeni bir nesne oluşturmak için `new` anahtar kelimesi ile bir sınıfın constructor fonksiyonu çağrılır.

- `new` kullanarak bir sınıfın instance'ını oluşturabiliriz.

```
class Araba {
  constructor(marka, model) {
    this.marka = marka;
    this.model = model;
  }
}

let yeniAraba = new Araba('Toyota', 'Corolla'); // new ile nesne oluşturuluyor

```

> Bu anahtar kelimeler JavaScript'te farklı amaçlar için kullanılırlar ve genellikle nesne yönelimli programlama ve nesne oluşturma süreçlerinde önemli roller üstlenirler.
