window.addEventListener('scroll',function(){
        var scroll=document.querySelector('.scrollTop');
        scroll.classList.toggle("active",window.scrollY>400)
    })

function toTop(){
    window.scrollTo({top:0,behavior:'smooth'})
}