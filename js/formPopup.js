const sendMessage = document.getElementById('msg-btn');
const formBtn = document.getElementById('form-btn');
const popupMessageContainer = document.getElementById('popup-message');

// EventListener
sendMessage.addEventListener('click',  function(){
    popupMessageContainer.classList.add('live');
});
formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popupMessageContainer.classList.remove('live');
});
window.addEventListener('click', e => e.target == popupMessageContainer ? popupMessageContainer.classList.remove('live') : false);