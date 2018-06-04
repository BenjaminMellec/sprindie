var slideIndex = [1,1];
var slideId = ["sprindie__slides-1", "sprindie__slides-2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
    }
    x[slideIndex[no]-1].style.display = "block";
}


$('#js-wireframe').addClass('sprindie__nav-tab--current');
$('#js-wireframe, #js-mockup, #js-tools').click(function() {
    $('#js-wireframe, #js-mockup, #js-tools').removeClass('sprindie__nav-tab--current')
    $(this).addClass('sprindie__nav-tab--current');
});


$('#js-wireframe').click(function(){
    $('#js-wireframe-slide').addClass('show').removeClass('hide')
    $('#js-mockup-slide, #js-tools-slide').addClass('hide').removeClass('show')
})

$('#js-mockup').click(function(){
    $('#js-mockup-slide').addClass('show').removeClass('hide')
    $('#js-wireframe-slide, #js-tools-slide').addClass('hide').removeClass('show')
})

$('#js-tools').click(function(){
    $('#js-tools-slide').addClass('show').removeClass('hide')
    $('#js-mockup-slide, #js-wireframe-slide').addClass('hide').removeClass('show')
})
