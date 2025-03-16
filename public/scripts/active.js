function removeActive(){
    const activeBtn = document.getElementsByClassName('active');
    for(const btn of activeBtn){
        btn.classList.remove('active')
    }
}

