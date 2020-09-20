const popUp = document.getElementById('pop-up');
const showcase = document.getElementById('showcase');
const image = document.querySelector('.image');

const getImage = function(image) {
    return image.src;
};

showcase.addEventListener('click', e => {

    image.classList.add('show-pop-up');
   
   
    console.log(e.target);
});
window.addEventListener('click', e => e.target == popUp ? popUp.classList.remove('show-pop-up') : false); 