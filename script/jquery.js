$(document).ready(function() {
    let currentSlide = 0;
    const slides = $('.slide');
    const dots = $('.dot');
    const totalSlides = slides.length;
    function showSlide(index) {
        slides.each(function(i) {
            $(this).css('transform', 'translateX(' + (i - index) * 100 + '%)');
            dots.eq(i).toggleClass('active', i === index);
        });
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    $('.next').click(nextSlide);
    dots.click(function() {
        currentSlide = $(this).index();
        showSlide(currentSlide);
    });
    showSlide(currentSlide);
});
