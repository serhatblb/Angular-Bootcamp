## _npm Nedir?  npm Komutları Nelerdir?_

npm (Node Package Manager), Node.js paketlerini yönetmek, dağıtmak ve paylaşmak için kullanılan bir paket yöneticisidir. Node.js ile birlikte gelir ve geliştiricilere JavaScript projelerinde dış paketlerin (modüllerin) kurulumunu, güncellemesini ve kaldırılmasını sağlar.

### npm:

- Bir projenin bağımlılıklarını yönetmek için kullanılır. Bir projenin gereksinim duyduğu paketleri (`dependencies`), geliştirme aşamasında ihtiyaç duyulan paketleri (`devDependencies`) ve diğer bağımlılıkları `package.json` dosyasında yönetir. `package.json` dosyası, projenin yapılandırması ve bağımlılıklarının listelendiği bir dosyadır ve npm bu dosyayı kullanarak projede gerekli olan paketleri yönetir.


### `npm init -y` :

- Bir Node.js projesinde `package.json` dosyasını hızlıca oluşturan bir komuttur. `-y` seçeneğiyle birlikte kullanıldığında, kullanıcıya proje ayarlarıyla ilgili sorular sormadan varsayılan değerlerle otomatik olarak `package.json` dosyasını oluşturur. Bu komutu çalıştırdığınızda, varsayılan değerlerle bir `package.json` dosyası oluşturulur ve böylece proje bağımlılıkları kolayca eklenmeye başlanabilir


### npm Komutları:

- Bir Node.js projesinde bağımlılıkları yönetmek, paketleri yüklemek, güncellemek, silmek ve diğer birçok işlemi yapmak için kullanılır. İşte bazı temel npm komutları:

- `npm install <paket_adı>`: Belirtilen paketi yükler.
- `npm install`: package.json dosyasında listelenen tüm bağımlılıkları yükler.
- `npm uninstall <paket_adı>`: Belirtilen paketi kaldırır.
- `npm update <paket_adı>`: Belirtilen paketi günceller.
- `npm outdated`: Güncel olmayan paketleri gösterir.
- `npm init`: Bir proje için package.json dosyası oluşturur (adım adım sorular sorarak).
- `npm search <paket_adı>`: npm deposunda belirli bir paketi arar.
- `npm run <script_adı>`: package.json dosyasında belirtilen özel script'leri çalıştırır.
- `npm list`: Projenin bağımlılıklarını listeler.

> Bu komutlar, npm'in yaygın olarak kullanılan bazı komutlarıdır. npm'in daha fazla komut ve seçeneği bulunmakta olup, bu komutlar genellikle projelerde bağımlılıkları yönetmek ve geliştirme süreçlerini kolaylaştırmak için kullanılır.

![Image](https://www.zdnet.com/a/img/resize/d101e2906705d7a0320f654afc914fd1c3631443/2020/01/13/7b52414d-132a-4ef9-b050-0f16e37f433b/npm.png?auto=webp&width=1280)