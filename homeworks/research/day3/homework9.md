## _for ile while , do while arasındaki farklar nelerdir ?_


### for Düngüsü:

- for döngüsü, belirli bir sayıda ya da belirli bir koşula göre tekrarlanmasını istediğiniz durumlarda kullanılır. Genellikle bir başlangıç değeri atanması, bir koşulun kontrol edilmesi ve her bir döngü tekrarında yapılan bir işlemin gerçekleştirilmesi için kullanılır.

```
for (let i = 0; i < 5; i++) {
    console.log(i); // 0'dan 4'e kadar sayıları yazdırır
}

```

### while Döngüsü:

- while döngüsü, belirli bir koşul doğru olduğu sürece bir bloğun çalışmasını sağlar. Bu döngü, koşul başlangıçta doğruysa, döngü devam eder. Koşul doğru olmazsa, döngü durur.

```
let i = 0;
while (i < 5) {
    console.log(i); // 0'dan 4'e kadar sayıları yazdırır
    i++;
}

```

### do-while Döngüsü:

- do-while döngüsü, while döngüsüne benzer ancak farklı olarak, döngü bloğunu çalıştırır ve ardından koşulu kontrol eder. Bu nedenle, do-while döngüsü, döngü bloğunu en az bir kez çalıştırmayı garanti eder, ardından koşulu kontrol eder ve eğer koşul doğruysa döngü devam eder, yanlışsa döngü durur.

```
let i = 0;
do {
    console.log(i); // 0'dan 4'e kadar sayıları yazdırır
    i++;
} while (i < 5);

```

![Image](https://tutorialsart.com/wp-content/uploads/2023/01/image-1024x645.png)