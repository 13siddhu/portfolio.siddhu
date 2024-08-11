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
const img1 = document.getElementById('img1');

learn.style.display = 'none';
about1.style.display = 'none';
skill1.style.display = 'none';
skill.style.display = 'none';
details.style.fontSize = '22px';
details1.style.fontSize = '22px';
para.style.fontSize = '20px';
details.style.color = 'white';
details1.style.color = 'white';
para.style.color = 'white';



about.addEventListener('click',()=>{

    slider.style.display = 'none';
    learn.style.display = 'inline-table';
    img1.style.display = 'flex';
    about1.style.display = 'flex';
    if(size<=432){
        img1.style.display = 'block'; 
        about1.style.display = 'block';
    }
    details.style.display='block';
    details1.style.display = 'compact';
    para.style.display = 'block';
    skill.style.display = 'block';
    skill.style.textAlign='center';
    skill1.style.display = 'inline-block';
    skill1.style.fontSize = '22px'
});

home.addEventListener('click',()=>{   
slider.style.display ='block';
about1.style.display = 'none';
learn.style.display = 'none';
skill1.style.display='none';
skill.style.display='none';
});


