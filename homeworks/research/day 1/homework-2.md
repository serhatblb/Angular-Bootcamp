## ASCII ve Unicode Karakter Kodlamaları Arasındaki Farklar

**ASCII (American Standard Code for Information Interchange):**

- ASCII, bilgisayarlar arasında metinlerin değiş tokuşu için tasarlanmış bir karakter kodlaması standartıdır.
- Başlangıçta 7-bitlik bir karakter kodlaması olarak geliştirilmiş ve temelde 128 farklı karakteri temsil etmek için kullanılmıştır. Bu karakterler İngilizce alfabesi, noktalama işaretleri, rakamlar ve bazı kontrol karakterlerini içerir.
- Daha sonra genişletilmiş ASCII versiyonları ortaya çıkmıştır. 8-bitlik (extended ASCII) karakter setleri, orijinal 128 karakterin yanı sıra ekstra 128 karakter daha içerir, böylece toplamda 256 farklı karakteri temsil edebilir hale gelmiştir.

**Unicode:**

- Unicode, ASCII'den daha geniş bir karakter kümesini temsil etmek için tasarlanmış bir karakter kodlama standardıdır.
- Temel amacı, dünya çapında farklı dillerde ve sembollerdeki tüm karakterleri tek bir standart altında toplamaktır.
- Unicode'un farklı kodlama formatları vardır; en yaygın olanı UTF-8, UTF-16 ve UTF-32'dir.
- UTF-8, en yaygın kullanılan Unicode kodlamasıdır ve ASCII ile uyumludur. Yani, ASCII karakterler UTF-8 içinde aynıdır ve aynı şekilde temsil edilir.
- Unicode, 149.000'den fazla karakter için kodları destekleyen evrensel bir karakter kodlama standardı olarak tanımlanır, böylece neredeyse tüm ana dillerdeki metinlerin bilgisayar işlemesi için temsil edilmesini sağlar.

**Farklar:**

> 1. **Karakter Aralığı:** ASCII, başlangıçta 7-bitlik bir kodlama ile 128 karakteri temsil ederken, genişletilmiş versiyonlarıyla birlikte toplamda 256 farklı karakteri temsil edebilir hale gelmiştir. Unicode ise çok daha geniş bir karakter yelpazesini kapsar ve farklı dillerden, sembollerden ve sembolik karakterlerden oluşan binlerce karakteri içerir.

> 2. **Temsil Biçimi:** ASCII, başlangıçta 7-bitlik bir kodlama ile karakterleri temsil ederken, Unicode farklı kodlama biçimleri kullanarak karakterleri temsil eder. UTF-8 en yaygın olanıdır ve ASCII ile uyumludur.

> 3. **Kullanım Alanı:** ASCII, özellikle İngilizce dilinde kullanılan temel karakterleri temsil etmek için tasarlanmıştır. Unicode ise tüm dünya dillerini, sembollerini ve özel karakterleri içeren geniş bir standarttır.

![Image](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*ku84oCF8pPTY1r5GzbZ_qw.png)
