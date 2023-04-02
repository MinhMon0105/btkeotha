var progress = document.querySelector('.progress');
var progressBar = document.querySelector('.progress-bar');
var progressCircle = document.querySelector('.progress-circle');

var drag = false;

progress.addEventListener('mousedown', function(){
    drag = true
});

document.addEventListener('mousemove', function(e){
    var clientX = e.clientX
    var left = progress.getBoundingClientRect().left
    var width = progress.getBoundingClientRect().width
    var min = left
    var max = progress.getBoundingClientRect().width + left

    if(drag && clientX >= min && clientX <= max){
        var percent = (clientX - left)/width

        progress.classList.add('dragging')
        progressBar.style.width = percent*100 + '%'
        progressCircle.style.left = percent*100 + '%'
        drawDemo(e);
    }
});
document.addEventListener('mouseup', function(e){
    drag = false;
    hideDemo(e);
});
