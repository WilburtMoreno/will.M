// 'div' for the container of the fullview image popup
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// gets all the images from DOM in a array form
const images = document.querySelectorAll('.images');

const imgArr = [];
let currentImg;

images.forEach( (image, index) => {
   // add the .images to an array called 'imgArr'
   imgArr.push(image);

   // adding id property to img attribute by its indexes plus one for non zero based index;
   image.id = "image-"+ (index) ; 

    //EventListener
     image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;

       closeImage(lightbox, index);
        lightbox.appendChild(img);

        // Left Right Control
        img.onload = function() {
            const imgWidth = this.width;
            const calcImgEdges = ((window.innerWidth - imgWidth) / 2) - 80;
           
            //TEST
            //console.log(imgArr);
             console.log(currentImg);
             console.log('index: ' + index);

            // Prev button
            const prevBtn = document.createElement('a');
            const prevName = document.createTextNode('prev');
            prevBtn.appendChild(prevName);
            lightbox.appendChild(prevBtn);
            prevBtn.id = 'prev';
            prevBtn.style.cssText = 'left: ' + calcImgEdges + 'px;';
            prevBtn.setAttribute('onclick', 'changeImg(0)');
           

            // Next button
            const nextBtn = document.createElement('a');
            const nextName = document.createTextNode('next');
            nextBtn.appendChild(nextName);
            lightbox.appendChild(nextBtn);
            nextBtn.id = 'next';
            nextBtn.style.cssText = 'right: ' + calcImgEdges + 'px;';
            nextBtn.setAttribute('onclick', 'changeImg(1)');
        };
     });

     
});
// Method
function closeImage(lightbox, index) {
    while(lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
    }
    // resets the currentIndex to whatever index is clicked
    currentImg = index;
};
function changeImg(prevNext) {
    const zeroBasedDotLength = imgArr.length -1; 
    let iterateImg;
    console.log('----------------------------------------------------------------');
    
    if(prevNext === 0 ) {
       iterateImg = imgArr[(currentImg-- -1)];
        if(currentImg < 1) {
            currentImg = zeroBasedDotLength;
        }
    }
    if(prevNext === 1 ) {
        iterateImg = imgArr[(currentImg++ -1)];
        if(currentImg > zeroBasedDotLength) {
            currentImg = 1;
        } 
    }

    console.log('Object: ');
    console.log(imgArr[currentImg]);
    console.log('output: '+ currentImg);
}
//EventListener
lightbox.addEventListener('click', e => {
    if(e.target !== e.currentTarget) return
     lightbox.classList.remove('active');
});


