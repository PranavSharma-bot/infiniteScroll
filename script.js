const container = document.querySelector('.container');
const URL = 'http://api.adorable.io/avatars/';

function randNum(){
    return Math.floor(Math.randon()*100);
}

function loadImages(numImages = 10){
    let i = 0;
    while(i < numImages){
        const img = document.createElement('img');
        img.src = `${URL}${randNum()}`;
        container.appendChild(img);
        i++;
    }
}

loadImages();

document.addEventListener('scroll',()=>{
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImages();
    }
})