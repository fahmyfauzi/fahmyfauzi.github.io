var myButton = document.getElementById('myBtn');

//scroll down 20px
window.onscroll=function(){
    scrollFunction();
}

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        myButton.style.display = 'block';
    }else{
        myButton.style.display = 'none';
    }
}

//user click button
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}