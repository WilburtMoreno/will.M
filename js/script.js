// 'div' for the container of the fullview image popup
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// gets all the images from DOM in a array form
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

        // Left Right Control
        img.onload = function() {
            const imgWidth = this.width;
            const calcImgEdges = ((window.innerWidth - imgWidth) / 2) - 80;
           
            //TEST
            console.log(calcImgEdges);

            // Prev button
            const prevBtn = document.createElement('a');
            const prevName = document.createTextNode('prev');
            prevBtn.appendChild(prevName);
            lightbox.appendChild(prevBtn);
            prevBtn.id = 'prev';
            prevBtn.style.cssText = 'left: ' + calcImgEdges + 'px;';
           

            // Next button
            const nextBtn = document.createElement('a');
            const nextName = document.createTextNode('next');
            nextBtn.appendChild(nextName);
            lightbox.appendChild(nextBtn);
            nextBtn.id = 'next';
            nextBtn.style.cssText = 'right: ' + calcImgEdges + 'px;';
        };
     });

     
});

//EventListener
lightbox.addEventListener('click', e => {
    if(e.target !== e.currentTarget) return
     lightbox.classList.remove('active');
});


