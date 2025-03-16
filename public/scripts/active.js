function removeActive(){
    const activeBtn = document.getElementsByClassName('active');
    for(const btn of activeBtn){
        btn.classList.remove('active')
    }
}

 // Load Vide Details

 function loadVideoDetails(video_id){
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${video_id}`
    console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => displayVideoDetails(data.video))

 }

 const displayVideoDetails = (video) => {
    console.log(video);
    document.getElementById("videoDetails").showModal();
    
    const detailsContainer = document.getElementById('details_container');
            detailsContainer.innerHTML = `
            <div class="card bg-base-100 border-b border-red-50">
                <figure>
                    <img class="shadow-sm"
                        src="${video.thumbnail}"
                        alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title font-bold">${video.title}</h2>
                    <p class="text-gray-400">${video.description}</p>
                    <div class=" mt-5 card-actions flex justify-between items-center">
                        <div class="flex gap-x-2 items-center">
                            <div > <img
                                class="w-8 h-8 rounded-full object-cover aspect-square"
                            src="${video.authors[0].profile_picture}" alt="Author Image"> </div>
                            <p class="font-semibold">${video.authors[0].profile_name}</p>
                        </div>
                        <div>
                            <button onclick='subscribe()' class="btn active">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            `
 }


 const subscribe = ()=>{

    event.target.classList.remove('active');
    event.target.style.background ='#ddd';
    event.target.style.color = 'black';
    event.target.setAttribute('disabled', true);
    event.target.innerText = "Subscribed";
    
    
}