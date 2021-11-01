window.addEventListener("scroll", function(){
    let scrollpost = this.window.scrollY;
    console.log(scrollpost);
    if (scrollpost > 600) {
        document.getElementById('header').classList.add('headerRed');
    }
    else {
        document.getElementById('header').classList.remove('headerRed');
    }
});


// window.addEventListener("scroll", function(){
//     let scrollpost = this.window.scrollY;
//     console.log(scrollpost);
//     if (scrollpost > 600) {
//         document.getElementById('header').classList.add('headerRed');
//     }
//     else {
//         document.getElementById('header').classList.remove('headerRed');
//     }
// });
// content-3Buttom
    
function contentOn(){
    document.getElementById('content-3').classList.add('content-3noscroll');
    document.getElementById('content-3').classList.remove('content-3scroll');
}
function contentOff(){
    document.getElementById('content-3').classList.add('content-3scroll');
    document.getElementById('content-3').classList.remove('content-3noscroll');
}


function content4Block1(){
    document.getElementById('content-4Block-1').style.display = 'block';
    document.getElementById('content-4Block-2').style.display = 'none';
    document.getElementById('content-4Block-3').style.display = 'none';
}
function content4Block2(){
    document.getElementById('content-4Block-1').style.display = 'none';
    document.getElementById('content-4Block-2').style.display = 'block';
    document.getElementById('content-4Block-3').style.display = 'none';
}
function content4Block3(){
    document.getElementById('content-4Block-1').style.display = 'none';
    document.getElementById('content-4Block-2').style.display = 'none';
    document.getElementById('content-4Block-3').style.display = 'block';
}


// content-4Block-1