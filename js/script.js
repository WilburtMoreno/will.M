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


        closeImage(index);
        lightbox.appendChild(img);

        // Left Right Control
        img.onload = function() {
            const imgWidth = this.width;
            const calcImgEdges = ((window.innerWidth - imgWidth) / 2) - 80;
           
            //TEST
            //console.log(imgArr);   

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
function closeImage(index) {
    while(lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
    }
    // resets the currentIndex to whatever index is clicked
    currentImg = index;
};
function changeImg(prevNext) {
    const zeroBasedDotLength = imgArr.length -1; 
    let iterateImg;
    
    // Manipulating images 
    if(prevNext === 0 ) {
       imgArr[(currentImg-- -1)];
        if(currentImg < 1) {
            currentImg = zeroBasedDotLength;
        }
    }
    if(prevNext === 1 ) {
        imgArr[(currentImg++ -1)];
        if(currentImg > zeroBasedDotLength) {
            currentImg = 1;
        } 
    }

    // get the img source
    const imageSplit = imgArr[currentImg].src.split('/');
    const folderSource = imageSplit[3];
    const photo = imageSplit[4];

    // remove current Photo
    lightbox.removeChild(lightbox.firstChild);

    // ASSEMBLE!!!!
    const newImage = document.createElement('img');
    
    // take note on this one
    lightbox.insertBefore(newImage, lightbox.firstChild);
    newImage.setAttribute('id', imgArr[currentImg].id);
    newImage.setAttribute('src', folderSource + '/' + photo);

    // prev and next button display udjust
    newImage.onload = function() {
        const newPosition = ((window.innerWidth - this.width) / 2) - 80;
        document.getElementById('prev').style.cssText = 'left:' +newPosition+ 'px';
        document.getElementById('next').style.cssText = 'right:' +newPosition+ 'px'; 
    };
}
//EventListener
lightbox.addEventListener('click', e => {
    if(e.target !== e.currentTarget) return
     lightbox.classList.remove('active');
});


