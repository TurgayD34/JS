let id, Btn, resultFalse, resultTrue, oddNum = 0, evenNo = 0, i,j, result,z, zToplam = 0;
            id = document.querySelector('#tc');
            Btn = document.querySelector('#Btn');
            resultFalse = document.querySelector('#resultFalse');
            resultTrue = document.querySelector('#resultTrue');

            Btn.addEventListener('click',function(){
                for(i = 0; i < 9; i+2){
                    oddNum += Number(id.value[i]);
                }
                for(j = 1; j < 8; j+2){
                    evenNo += Number(id.value[j]);
                }
                oddNum *= 7;
                result = Math.abs(oddNum - evenNo);
                for(z = 0; z < 10; z++){
                    zToplam += Number(id.value[z]);
                }
                resultFalse.style.display = "block";
                resultTrue.style.display = "none";
                if(id == ""){
                    resultFalse.textContent = "Kimlik numarasi alani bos birakamazsiniz.";
                }else if(id.value.length !== 11){
                    resultFalse.textContent = "Kimlik numaraniz 11 haneli olmak zorundadir.";
                }else if(isNaN(id.value)){
                    resultFalse.textContent = "Kimlik numarasi sayilardan olusmak zorundadir.";
                }else if(id.value[0] == 0){
                    resultFalse.textContent = "Kimlik numarasi ilk degeri sifir olamaz.";
                }else if(result % 10 != Number(id.value[9])){
                    resultFalse.textContent = "TC kimlik numaranizi hatali giris yaptiniz. Lutfen tekrardan kontrol ediniz.";
                }else if(zToplam % 10 != Number(id.value[10])){
                    resultFalse.textContent = "TC kimlik numaranizi hatali giris yaptiniz. Lutfen tekrardan kontrol ediniz.";
                }else{
                    resultFalse.style.display = "none";
                    resultTrue.style.display = "block";
                    resultTrue.textContent = "Girilen kimlik numarasi sorunsuzdur."
                }
            });