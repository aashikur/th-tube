// Load Videos Api

const videoApi = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
  .then(response => response.json())
  .then(data => dynamicVideo(data.videos))
}


function CatagoryFilter(id){ // Getting ID from Category.js file
  const urls = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
   
  console.log(urls);
  fetch(urls)
  .then(res=> res.json())
  .then(data => dynamicVideo(data.category))
  // here data.category is "Array of Content"
}



// This Will Get the Result if u give "Array of Content"
function dynamicVideo(data){
  const videoContainer = document.getElementById('video-container');
        videoContainer.innerHTML = '';
  
  data.forEach(video => {

    const div = document.createElement('div');
    const bage = (video.authors[0].verified)? "https://img.icons8.com/?size=48&id=102561&format=png" : "";
    div.innerHTML = `
              <div>
            <div class="relative">
                <img class="rounded-md aspect-video w-full object-cover" src="${video.thumbnail}" alt="">
                <span class="absolute bg-black text-white text-sm px-[6px] rounded-sm bottom-2 right-4">3hrs 56 min ago</span>
            </div>
            <div class="mt-2 flex gap-2">
                <div class=""><img class="w-14 aspect-square rounded-full" src="${video.authors[0].profile_picture}" alt=""></div>
                <div class="px-1">
                    <h1 class="font-bold mb-2 text-sm md:text-[1.125rem]">Building a Winning UX Stategy usig the Kano Model</h1>
                    <p class="flex gap-1 text-sm text-gray-600">${video.authors[0].profile_name} <span><img class="w-6 " src="${bage}" alt=""></span></p>
                    <p class="text-sm text-gray-600">${video.others.views} views</p>
                </div>
            </div>
        </div>
    `

    videoContainer.appendChild(div);
  });
}

videoApi();


