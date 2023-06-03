// let fruit = ["elma", "armut", "erik", "karpuz", "çilek"];
// for(let i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);
// }
// //! 0'dan 100'e
// for (let i = 0; i <= 100; i = i + 2){
//     console.log(i);
// }
// //! toplama
// let numbers = [10, 20 ,5, 50, 100,200];
// let result = 0;
// for(let i = 0; i < numbers.length; i++){
//     console.log(result = result + numbers[i]);
// }
// //! kısayol index
// let numbers = [10, 20 ,5, 50, 100,200];
// let result = 0;
// for(let i in numbers){
//     console.log(result += numbers[i]);
// }
//! direkt sayı alma
// let numbers = [10, 20 ,5, 50, 100,200];
// for(let i of numbers){
//     console.log(i);
// }
//! object ile döngü
// const user = {
//     "ad": "burhan",
//     "soyad": "çolak",
//     "yas": 25
// }
// for(let key in user){
// console.log(user[key]);
// }
//! çoklu users
let users = [
    {
        "ad": "burhan",
        "soyad": "çolak",
        "yas": 25
    },
    {
        "ad": "nur",
        "soyad": "çolak",
        "yas": 25
    },
    {
        "ad": "ahmet",
        "soyad": "çolak",
        "yas": 25
    }
]
for (let index = 0; index < users.length; index++) {
    console.log(users[index].ad);
    
}


// Bir for döngüsü şu şekilde çalışır:

// Döngü başlangıcı: Sayaç değişkeni tanımlanır ve başlangıç değeri atanır.
// Koşul kontrolü: Her tekrarda belirli bir koşul kontrol edilir.
// Döngü bloğu: Koşul doğruysa, belirtilen kod bloğu çalıştırılır.
// Sayaç güncellemesi: Kod bloğu tamamlandıktan sonra sayaç değişkeni güncellenir.
// Döngü sonu: Sayaç güncellendikten sonra, koşul yeniden kontrol edilir ve tekrar edilip edilmeyeceği belirlenir.
