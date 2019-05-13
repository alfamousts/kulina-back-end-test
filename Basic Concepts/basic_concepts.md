### Code Smell in OOP
Salah satu contoh code smell di OOP apabila terdapat dua subclass yang meng-*inherit* kepadan satu superclass yang sama. Dan di dalam keduanya terdapat *method* yang serupa.  Solusi yang dilakukan dapat dilakukan dengan metode *Extract method +  Pull up method* atau mengambil kode serupa dari dua method tersebut dan menyimpannya ke dalam superclass.
![Code Smell in Classes](https://i.imgur.com/v4lbgup.png "Code Smell in Classes")
