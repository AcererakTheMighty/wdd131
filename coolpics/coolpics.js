
const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('.logo');


logo.addEventListener('click', () => {
    navLinks.style.display =
        navLinks.style.display === 'flex' || navLinks.style.display === 'block'
            ? 'none'
            : 'block';
});


const images = document.querySelectorAll('.gallery img');

const modal = document.createElement('div');
const modalImage = document.createElement('img');
const closeButton = document.createElement('span');

modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

modalImage.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    border-radius: 8px;
`;

closeButton.textContent = '✕';
closeButton.style.cssText = `
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 2rem;
    color: white;
    cursor: pointer;
`;


modal.appendChild(modalImage);
modal.appendChild(closeButton);
document.body.appendChild(modal);


images.forEach(img => {
    img.addEventListener('click', () => {
        modalImage.src = img.src;
        modal.style.display = 'flex';
    });
});


const closeModal = () => {
    modal.style.display = 'none';
    modalImage.src = '';
};


closeButton.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
