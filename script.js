const orders = document.querySelectorAll(".order");

orders.forEach(btn=>{
btn.onclick=function(e){

e.preventDefault();

let produk = this.dataset.produk;

let pesan =
`Halo KYY STORE

Nama:
Pesanan: ${produk}
Pembayaran: DANA / GOPAY
Email Akun:
Password Akun:`;

let url = "https://wa.me/62895805295495?text="+encodeURIComponent(pesan);

window.open(url);

}
});


const toggle = document.getElementById("modeToggle");

toggle.onclick=function(){

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
toggle.textContent="☀️";
}else{
toggle.textContent="🌙";
}

}


const reveal=document.querySelectorAll(".reveal");

function show(){

let windowHeight=window.innerHeight;

reveal.forEach(el=>{

let top=el.getBoundingClientRect().top;

if(top<windowHeight-50){
el.classList.add("active");
}

});

}

window.addEventListener("scroll",show);
window.addEventListener("load",show);