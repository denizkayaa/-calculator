let buton=document.getElementsByTagName('button');
let input=document.getElementsByClassName('ekran1')[0];
let temizle =document.getElementById('temizle');
let hesapla = document.getElementById('hesapla');

for(let i=0; i<16; i++){
    if(i!=12 && i!=14){
    buton[i].addEventListener('click',yazdir);
    }
}
temizle.addEventListener('click',sil);
hesapla.addEventListener('click',hesap);

function hesap(){
    input.value = eval(input.value);
}

function yazdir(){
    input.value = input.value +this.value;
}

function sil(){
    input.value='';//ekrandaki bilgileri siler 
}



















