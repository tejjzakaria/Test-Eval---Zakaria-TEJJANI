
var i = 0;

var images = [];

var time = 3000;

images[0] = 'files/image2.png';
images[1] = 'files/image3.png';
images[2] = 'files/image4.png';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;
