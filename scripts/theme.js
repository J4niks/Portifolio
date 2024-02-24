let body = document.querySelector('body')
function swapColor(){
    let check = body.classList.contains('lightMode')
    if(check === true){
        body.classList.remove('lightMode')
        localStorage.setItem('theme', 'false')
    }else{
        body.classList.add('lightMode')
        localStorage.setItem('theme', 'true')
    }
}

check()
function check(){
    let currentMode = localStorage.getItem('theme')
    if (currentMode === 'true'){
        body.classList.add('lightMode')
        localStorage.setItem('theme', 'true')
    }else if(currentMode === 'false'){
        body.classList.remove('lightMode')
        localStorage.setItem('theme', 'false')
    }
}