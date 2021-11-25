let email = "admin4@gmail.com"

 // Karsilastirmak istedigimiz neyse onu koymamuz gerekiyor.Mesela burada email karsilastirlicak o yuzden email kullanildi.
switch(email){
   case "td@gmail.com":
       console.log(`Basari ile giris yaptiniz...`);
       break;
    case "admin@gmail.com":
        console.log(`Admin olarak giris yapmaya calistiniz...`);
        console.log(`Buraya giris izniniz yoktur.`);
        break;
    default:
        console.log(`Giris bilgileriniz yanlistir. Tekrar deneyiniz...`)
}