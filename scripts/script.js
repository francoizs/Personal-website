window.addEventListener('scroll',function(){
        var scroll=document.querySelector('.scrollTop');
        scroll.classList.toggle("active",window.scrollY>400)
    })

function toTop(){
    window.scrollTo({top:0,behavior:'smooth'})
}

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

console.log(document.getElementById('message').value);

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
