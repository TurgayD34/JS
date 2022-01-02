var text = `Istanbul, Turkiye'de Marmara Bölgesi'nde yer alan şehir ve Türkiye Cumhuriyeti Devletinin 81 ilinden biridir. 
Ülkenin nüfus bakımından en çok göç alan ve en kalabalık ilidir. Ekonomik, tarihî ve sosyo-kültürel açıdan önde gelen 
şehirlerden biridir. Şehir, iktisadi büyüklük açısından dünyada 34. sırada yer alır.`;

document.getElementById('result').innerHTML = text.search(/Turkiye/i);