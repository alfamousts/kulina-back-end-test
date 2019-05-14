### Code Smell in OOP
Salah satu contoh code smell di OOP apabila terdapat dua subclass yang meng-*inherit* kepadan satu superclass yang sama. Dan di dalam keduanya terdapat *method* yang serupa.  Solusi yang dilakukan dapat dilakukan dengan metode *Extract method +  Pull up method* atau mengambil kode serupa dari dua method tersebut dan menyimpannya ke dalam superclass.

![Code Smell in Classes](https://i.imgur.com/v4lbgup.png "Code Smell in Classes")

### Dependency Injection
Dependency sendiri dapat diartikan sebuah kebergantungan sebuah sistem terhadap sistem lain dalam menjalankan prosesnya.
Sebagai contoh di OOP terdapat sebuah class yang membutuhkan class lain. Sebagai contoh dapat ditunjukkan dalam baris kode berikut.
```
class Car{
  private Wheels wheel = new MRFWheels();
  private Battery battery = new ExcideBattery();
  ...
  ...
}
```

Pada barisan kode di atas dapat dilihat class Car bergantung pada kelas *Wheels* dan *battery*. Maka dari itu di dalam class Car
akan dibentuk dua buah Class baru yakni *wheel* dan *battery*. Daripada membuat Class Dependency di dalam sebuah Class kita dapat membentuknya di luar Class dan memasukkannya (*inject*) ke dalam Class dengan sebuah *method* atau dari *constructor* Class sebagai dilihat baris kode berikut.
```
class Car{
  private Wheels wheel;
  private Battery battery;

  /*Somewhere in our codebase we instatiate the objects required by this class.
    There are two methods for implementing injection:
    1. Constructor based
    2. Setter based
  */

  // Constructor Based
  Car(Wheel wh, Battery bt) {
    this.wh = wh;
    this.bt = bt;
  }

  // Setter Based
  void setWheel(Wheel wh){
    this.wh = wh;
  }
  ...  
  ...
  // Rest of code  
}
```

Mekanisme inilah yang disebut dengan *Dependency Injection* yakni mentransfer tugas untuk membuat sebuah object dependent yang dibutuhkan kepada mekanisme lain (diluar class atau sistem) dan setelah itu menggunakan object dependent yang dibutuhkan secara langsung.
