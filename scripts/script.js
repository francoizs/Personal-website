// scroll to top
let scroll = document.querySelector('.scrollTop');
window.addEventListener('scroll',function(){
    scroll.classList.toggle("active",window.scrollY>400)
    })

function toTop(){
    window.scrollTo({top:0,behavior:'smooth'})
}


// navigation: top link changes when going to smaller screens
let top_link = document.querySelector('.top-link');
if (window.innerHeight < 768) {
  top_link.href = '#top-mobile';
  console.log(top_link.href)
}


// The function that send the contact from to my email
function sendEmail(){
  if (document.getElementById('email').value !== '' && document.getElementById('message').value !== '' && document.getElementById('name').value !== '') {
    Email.send({
      SecureToken : "a239b1e6-0de2-429b-adce-7e23509b07f0",
      To : 'francoisdiel@hotmail.com',
      From : 'fransdois1@gmail.com',
      Subject : document.getElementById('name').value,
      Body : 'Form submit from Personal Website!'+'<br>'+'<br>'+ 'E-mail: '+'<br>'+document.getElementById('email').value+'<br>'+'<br>'+ 'Name: '+'<br>' +document.getElementById('name').value +'<br>'+ '<br>'+'Message: '+'<br>' +document.getElementById('message').value
  }).then(
    message => {
    if (message == 'OK') {
      alert('Message sent successfully, Thank You!');
      }
    else {
      alert(message)
    }
  }
  );
  }
  else {
    alert('Please fill in all the fields')
  }
}


// navigation: mobile menu
const nav = document.querySelector('nav');
const nav_menu = document.querySelector('.nav-menu');
const closemenu = document.querySelector('.closemenu');
const openmenu = document.querySelector('.openmenu');
const nav_links = document.querySelectorAll('.nav-link');

openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);
nav_links.forEach(link => {
  link.addEventListener('click',close);
});


function show(){
    
    nav_menu.style.display='flex';
    nav_menu.style.top='0';
}

function close(){
    nav_menu.style.top='-2000%';
}


// onscroll animation
const fade_ins = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slider');

const appear_fade_in_options = {
  rootMargin: "0px 0px -100px 0px"
}
const appear_slider_options = {
  rootMargin: "0px 0px -400px 0px"
}

const appearOnScrollFadeIn = new IntersectionObserver(function(entries, appearOnScrollFadeIn){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    else {
      entry.target.classList.add('on-scroll-active');
      appearOnScrollFadeIn.unobserve(entry.target);
    }
  })
}, appear_fade_in_options);

const appearOnScrollSlider = new IntersectionObserver(function(entries, appearOnScrollSlider){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    else {
      entry.target.classList.add('on-scroll-active');
      appearOnScrollSlider.unobserve(entry.target);
    }
  })
}, appear_slider_options);


fade_ins.forEach(fade_in => {
  appearOnScrollFadeIn.observe(fade_in);
});

sliders.forEach(slider => {
  appearOnScrollSlider.observe(slider);
});