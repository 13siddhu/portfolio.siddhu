const home = document.getElementById('home');
const about = document.getElementById('about');
const size = window.innerWidth;
const project = document.getElementById('project');
const blog = document.getElementById('blog');
const contact = document.getElementById('contact');
const contact1 = document.getElementById('contact1');
const learn = document.getElementById('learn');
const about1 = document.getElementById('about1');
const skill1 = document.getElementById('skill1')
const skill = document.getElementById('skill');
const details = document.getElementById('details');
const details1 = document.getElementById('details1');
const para = document.getElementById('para');
const img1 = document.getElementById('img1');
const social = document.getElementById('social');
const enquiry = document.getElementById('enquiry');
const contact2 = document.getElementById('contact2');
const contact3 = document.getElementById('contact3');
const project1 = document.getElementById('project1');



learn.style.display = 'none';
about1.style.display = 'none';
skill1.style.display = 'none';
skill.style.display = 'none';
details.style.fontSize = '22px';
details1.style.fontSize = '18px';
para.style.fontSize = '16px';
details.style.color = 'white';
details1.style.color = 'white';
para.style.color = 'white';
project1.style.display='none';
contact1.style.display = 'none';
contact1.style.color = 'white';



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
    details1.style.display = 'block';
    para.style.display = 'inline-block';
    skill.style.display = 'run-in';
    skill.style.textAlign='center';
    skill1.style.display = 'flex';
    skill1.style.fontSize = '22px';
    contact1.style.display = 'none';
    social.style.display = 'none';
    project1.style.display ='none';
});

home.addEventListener('click',()=>{   
slider.style.display ='block';
social.style.display='block';
learn.style.display = 'none';
about1.style.display = 'none';
skill1.style.display='none';
skill.style.display='none';
contact1.style.display = 'none';
project1.style.display = 'none';
});


project.addEventListener('click',()=>{
    slider.style.display = 'none';
    social.style.display = 'none';
    learn.style.display = 'none';
    about1.style.display = 'none';
    skill1.style.display = 'none';
    skill.style.display = 'none';
    contact1.style.display = 'none';
    project1.style.display = 'block';
});


contact.addEventListener('click',() => {
    slider.style.display = 'none';
    learn.style.display = 'none';
    about1.style.display='none'
    skill1.style.display = 'none';
    contact1.style.display = 'block';
    social.style.display='none';
    project1.style.display = 'none';
});



enquiry.addEventListener('click',()=>{
    alert('This feature will work soon');
});
