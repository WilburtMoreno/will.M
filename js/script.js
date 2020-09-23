// 'div' for the container of the fullview image popup
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// gets all the images in a array form
const images = document.querySelectorAll('.images');

images.forEach( image => {

    //EventListener
     image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;

        while(lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
     });
});

lightbox.addEventListener('click', e => {
    if(e.target !== e.currentTarget) return
     lightbox.classList.remove('active');
});


