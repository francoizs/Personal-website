window.addEventListener('scroll',function(){
        var scroll=document.querySelector('.scrollTop');
        scroll.classList.toggle("active",window.scrollY>400)
    })

function toTop(){
    window.scrollTo({top:0,behavior:'smooth'})
}

const logo= document.querySelectorAll('.logo-main path');

console.log(logo);
for (let i = 0; i < logo.length; i++) {
    console.log(logo[i].getTotalLength());
}

const nav = document.querySelector('nav');
const frontSection = document.querySelector('.front-section');

const frontSectionOptions = {
    rootMargin: '-45px 0px 0px 0px'
};

const frontSectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.add('nav-past');
        } else {
            nav.classList.remove('nav-past');
        }
    });
    }, frontSectionOptions);


frontSectionObserver.observe(frontSection);