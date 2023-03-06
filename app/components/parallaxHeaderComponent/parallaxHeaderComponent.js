document.body.addEventListener('mousemove', function(e) {
    var container = document.querySelector('.iceland-container');
    var x = e.clientX / window.innerWidth;
    var y = e.clientY / window.innerHeight;
    container.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 50 + 'px)';
});