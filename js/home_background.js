let hoverVisibleDiv = document.getElementsByClassName('hover-div-visible')[0];
let mainBackgroundSpan = document.getElementsByClassName('description')[0];

document.getElementsByClassName('mainBackGroundArea')[0].addEventListener('mouseover',()=>{
    hoverVisibleDiv.classList.remove('display-none');
    mainBackgroundSpan.classList.add('display-none');
})

document.getElementsByClassName('mainBackGroundArea')[0].addEventListener('mouseleave',()=>{
    // if (mainBackgroundSpan.classList.contains('display-none')){
        hoverVisibleDiv.classList.add('display-none');
        mainBackgroundSpan.classList.remove('display-none');
    // }
})