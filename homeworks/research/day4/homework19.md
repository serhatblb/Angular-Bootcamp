## _packag.json ve package-lock.json_


### package.json: 

- Bir Node.js projesinin yapılandırma ve bağımlılıklarının listelendiği bir dosyadır. Proje adı, sürümü, açıklaması gibi proje bilgilerini içerir ve aynı zamanda projenin bağımlılıklarını (dependencies) ve geliştirme aşamasında gereken bağımlılıkları (devDependencies) listeler. Bu dosya, `npm init` komutuyla oluşturulabilir veya paketler `npm install` komutuyla projeye eklenerek güncellenebilir. `package.json` dosyası aynı zamanda projenin başkalarıyla paylaşılması veya yeniden oluşturulması için gereklidir.


### package-lock.json:

- `package-lock.json`, `npm install` komutu çalıştırıldığında oluşturulan ve bağımlılıkların (dependencies) kesin sürümlerini ve ağaç yapısını içeren bir dosyadır. Bu dosya, proje bağımlılıklarının tam olarak hangi sürümlerde yükleneceğini belirtir. Bu, projenin farklı sistemlerde veya farklı zamanlarda aynı bağımlılıkları aynı sürümlerde yüklemesini sağlar, böylece projenin tutarlılığını korur. `package-lock.json` dosyası genellikle proje ile birlikte depolanır ve paylaşılır, böylece başka bir yerde projenin yeniden kurulduğunda aynı bağımlılıkların aynı sürümlerde yüklenmesini sağlar.



> Bu iki dosya, Node.js projelerinde bağımlılıkları yönetmek ve projenin tekrar oluşturulmasını sağlamak için önemli bir rol oynar. `package.json` proje yapılandırmasını ve bağımlılıkların listesini içerirken, `package-lock.json` bu bağımlılıkların tam sürümlerini ve bağımlılık ağaçlarını içerir, böylece proje bağımlılıklarının tutarlı bir şekilde yüklenmesini sağlar.

![Image](https://res.cloudinary.com/practicaldev/image/fetch/s--9DPi9Had--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1tru06wk3lg7uulyjygs.png)