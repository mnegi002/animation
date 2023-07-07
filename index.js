const header = document.getElementById('header');
const title = document.getElementById('title');
const para = document.getElementById('para');
const profile_img = document.getElementById('profile_img');
const names = document.getElementById('names');
const date = document.getElementById('date');


const animated = document.querySelectorAll('.animated');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData,1000);

function getData(){
    header.innerHTML = ' <img src="img.jpg" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit.'
    para.innerHTML = ' Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. '
    profile_img.innerHTML ='<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">' 
    names.innerHTML = 'Vihan'
    date.innerHTML = 'Nov 27,2002'

    animated.forEach((bg) => bg.classList.remove('animated'));
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}

