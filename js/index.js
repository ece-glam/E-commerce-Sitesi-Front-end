
function arttir(){
 
var sonuc=document.getElementById("sonuc");
sonuc.value=Number(sonuc.value)+1;
}
 
function azalt(){
 
var sonuc=document.getElementById("sonuc");
sonuc.value=Number(sonuc.value)-1;
}



const price=316.00
localStorage.setItem("price", JSON.stringify(price));

 var cargo =15.00;
 var subtotal=JSON.parse(localStorage.getItem("price"));;

document.getElementById("fast-cargo").onclick=function(){
    var tutar=Number(subtotal)+Number(cargo);
    document.getElementById("last-total").innerHTML="$"+Number(tutar);


}

document.getElementById("apply").onclick=function(){
    document.getElementById("apply").innerHTML="Geçerli Bir Kupon Kodu Girin.";
  
}