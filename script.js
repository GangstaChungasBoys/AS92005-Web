window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    document.querySelector('.parallax-1').style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    document.querySelector('.parallax-2').style.backgroundPositionY = (scrollPosition - document.querySelector('.parallax-2').offsetTop) * 0.5 + 'px';
});
