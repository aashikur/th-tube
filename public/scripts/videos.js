// Load Videos Api
const videoApi = (input ='') => {
  showLoader();

  fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${input}`)
    .then(response => response.json())
    .then(data => {
      removeActive();
      document.getElementById('btn-all').classList.add('active');
      dynamicVideo(data.videos);
    });


    // console.log(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${input}`);
};

function CatagoryFilter(id) {
  showLoader();
  // Getting ID from Category.js file
  const urls = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;

  // Graping the Btn by Dynamic ID_category
  const cat_btn = document.getElementById(`btn-${id}`);
  removeActive();
  cat_btn.classList.add('active');

  // console.log(urls);
  fetch(urls)
    .then(res => res.json())
    .then(data => {
      dynamicVideo(data.category);
    });
  // here data.category is "Array of Content..."
 
}

// This Will Get the Result if u give "Array of Content"
function dynamicVideo(data) {
  const videoContainer = document.getElementById('video-container');
  videoContainer.innerHTML = '';

  // console.log(data.length)
  if (data.length == 0) {
    videoContainer.innerHTML = `
      <div class="col-span-full flex flex-col items-center text-center gap-y-6 py-40">
        <div><img src="assets/img/Icon.png" alt=""></div>
        <div><h1 class="text-xl font-bold">Oops!! Sorry, there is no<br>Content here</h1></div>
      </div>
    `;
    hideLoader();
    return;
  }

  data.forEach(video => {
    const div = document.createElement('div');
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
            <p class="flex gap-1 text-sm text-gray-600">${video.authors[0].profile_name}
              <span>
                ${video.authors[0].verified ? '<img class="w-6" src="https://img.icons8.com/?size=48&id=102561&format=png" alt="">' : ''}
              </span>
            </p>
            <p class="text-sm text-gray-600">${video.others.views} views</p>
          </div>
        </div>
        <button onclick=loadVideoDetails('${video.video_id}') class="btn btn-block mt-2 bg-white hover:bg-gray-50 text-[#222] border-[#e5e5e5] text-sm md:text-[1rem]">
          Show Details
        </button>
      </div>
    `;
    videoContainer.appendChild(div);
  });
  hideLoader();
}

videoApi();
