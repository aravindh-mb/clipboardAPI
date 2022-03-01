var text = document.getElementById('text');
var btn =document.getElementById('copy-btn');
btn.addEventListener('click',()=>{
    navigator.clipboard.writeText(text.innerHTML); 
        setTimeout(function transition1(){
            btn.style.transform ='translateX(-8px)';
            btn.style.transition ='0.8s';
            btn.innerText='copied';
        },100)
        setTimeout(function transitions2(){
            btn.style.transform ='translateX(8px)';
            btn.style.transition ='0.8s';
            btn.innerText='copy';
        },1000)
});
    