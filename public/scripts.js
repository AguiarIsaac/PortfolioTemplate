const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener('click', function() {
        modalOverlay.classList.add('active');
        const videoId = card.getAttribute('id');
        window.location.href = `/video?id=${videoId}`;
    })
}
