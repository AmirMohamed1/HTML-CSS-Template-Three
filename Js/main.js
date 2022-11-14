let section = document.getElementById('our-skills');
let spans = document.querySelectorAll('.skill .the-progress span');

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 250) {
        spans.forEach(function (span) {
            span.style.width = span.dataset.width;
        });
    };
};