window.addEventListener('load', function() {


    var tabs = document.querySelector('.tabs');
    console.log(tabs)
    var btns = tabs.querySelectorAll('.tabs-nav-btn');
    var contentBoxes = tabs.querySelectorAll('.tabs-content-box');
    var targetClass;
    var targetContentBox;

    tabs.addEventListener('click', function(e) {
        targetClass = e.target.getAttribute('class');
        console.log(e.target);
        if(targetClass == 'tabs-nav-btn') {
            targetContentBox = e.target.getAttribute('data-to');

            for(var i = 0; i < btns.length; i++) {
                btns[i].classList.remove('active');
                contentBoxes[i].classList.remove('active');
            }
            targetContentBox = tabs.querySelector('#' + targetContentBox);
            targetContentBox.classList.add('active');
            e.target.classList.add('active');

        }
    });
})

