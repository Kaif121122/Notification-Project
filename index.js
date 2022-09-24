
const notificationNumber = document.querySelector('.number');
const markAll = document.querySelector('.mark-all');
const markUnread = document.querySelectorAll('.box-container');
const online = document.querySelectorAll('.online');

markAll.addEventListener('click', () => {
    markUnread.forEach((element) => {
        element.classList.remove('unread-comment')

    })
    notificationNumber.innerHTML = '0'
    online.forEach((element) => {
        element.style.backgroundColor = "white"

    })
})