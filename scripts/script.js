window.addEventListener('scroll',function(){
        var scroll=document.querySelector('.scrollTop');
        scroll.classList.toggle("active",window.scrollY>400)
    })

function toTop(){
    window.scrollTo({top:0,behavior:'smooth'})
}





const nav = document.querySelector('nav');
const nav_menu = document.querySelector('.nav-menu');
const closemenu = document.querySelector('.closemenu');
const openmenu = document.querySelector('.openmenu');

openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);

function show(){
    
    nav_menu.style.display='flex';
    nav_menu.style.top='0';
}

function close(){
    nav_menu.style.top='-2000%';
}
