let images = document.querySelectorAll('#tree');

for(let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', function(e) {
        images[i].classList.add('increase');
    })
    images[i].addEventListener('mouseout', function(e) {
        images[i].classList.remove('increase');
    })
};



