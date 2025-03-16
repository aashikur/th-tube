

document.getElementById('ScarchField').addEventListener('keyup',(event)=>{
   const input = event.target.value
    console.log(input);
    videoApi(input);
})


const showLoader = () => {
    document.getElementById('loader').classList.remove('hidden');
    document.getElementById('video-container').classList.add('hidden')
}

const hideLoader = () => {
    document.getElementById('loader').classList.add('hidden');
    document.getElementById('video-container').classList.remove('hidden')
}