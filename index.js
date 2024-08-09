const home = document.getElementById('home');
const about = document.getElementById('about');
const size = window.innerWidth;
const project = document.getElementById('project');
const blog = document.getElementById('blog');
const contact = document.getElementById('contact');
const learn = document.getElementById('learn');
const about1 = document.getElementById('about1');
const skill1 = document.getElementById('skill1')
const skill = document.getElementById('skill');
const details = document.getElementById('details');
const details1 = document.getElementById('details1');
const para = document.getElementById('para');

learn.style.display = 'none';
about1.style.display = 'none';
skill1.style.display = 'none';
skill.style.display = 'none';
details.style.fontSize = '30px';
details1.style.fontSize = '30px';
details.style.color = 'white';
details1.style.color = 'white';
para.style.color = 'white';

about.addEventListener('click',()=>{

    skill.style.display = 'flex';
    learn.style.display = 'flex';
    about1.style.display = 'flex';
    skill1.style.display = 'flex';
    slider.style.display = 'none';
});

home.addEventListener('click',()=>{   
slider.style.display ='block';
about1.style.display = 'none';
learn.style.display = 'none';
skill1.style.display='none';
skill.style.display='none';
});


let isSmallScreen = size <= 768;

if (isSmallScreen) {
    style.display = 'block';
    // Disable mouseover event for small screens
    } 
