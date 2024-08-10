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
//const img = document.getElementsByClassName('img');

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
    if (size < 432) {
       about1.style.display = 'block';
       details.style.display='compact';
       details1.style.display = 'compact';
       para.style.display = 'block';
       skill.style.display = 'block';
       skill1.style.display = 'block';
    }
    else{
        about1.style.display = 'inline-block';
    }
    details.style.display='compact';
    details1.style.display = 'compact';
    para.style.display = 'block';
    skill.style.display = 'block';
    skill1.style.display = 'block';
});

home.addEventListener('click',()=>{   
slider.style.display ='block';
about1.style.display = 'none';
learn.style.display = 'none';
skill1.style.display='none';
skill.style.display='none';
});


/*let isSmallScreen = size <= 431;

if (isSmallScreen) {
    about.addEventListener('click',()=>{

        slider.style.display = 'none';
        learn.style.display = 'inline-table';
        about1.style.display = 'block';
        details.style.display='block';
        details1.style.display = 'block';
        para.style.display = 'block';
        skill.style.display = 'block';
        skill1.style.display = 'block';
    });
    
    home.addEventListener('click',()=>{   
    slider.style.display ='block';
    about1.style.display = 'none';
    learn.style.display = 'none';
    skill1.style.display='none';
    skill.style.display='none';
    });


    // Disable mouseover event for small screens
    img.style.display = 'block';
    about1.style.display = 'block';
    } 
    else {       
}*/ 
