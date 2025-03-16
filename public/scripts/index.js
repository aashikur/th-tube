// Function to remove 'active' class from all elements with the 'active' class
function removeActive() {
    const activeBtn = document.getElementsByClassName('active');
    for (const btn of activeBtn) {
        btn.classList.remove('active');
    }
}

// Function to load video details based on video_id
function loadVideoDetails(video_id) {
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${video_id}`;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayVideoDetails(data.video));
}

// Function to display video details in a modal
const displayVideoDetails = (video) => {
    console.log(video);
    document.getElementById("videoDetails").showModal();

    const detailsContainer = document.getElementById('details_container');
    detailsContainer.innerHTML = `
        <div class="card bg-base-100 border-b border-red-50">
            <figure>
                <img class="shadow-sm" src="${video.thumbnail}" alt="Video Thumbnail" />
            </figure>
            <div class="card-body">
                <h2 class="card-title font-bold">${video.title}</h2>
                <p class="text-gray-400">${video.description}</p>
                <div class="mt-5 card-actions flex justify-between items-center">
                    <div class="flex gap-x-2 items-center">
                        <div>
                            <img class="w-8 h-8 rounded-full object-cover aspect-square" src="${video.authors[0].profile_picture}" alt="Author Image">
                        </div>
                        <p class="font-semibold">${video.authors[0].profile_name}</p>
                    </div>
                    <div>
                        <button onclick='subscribe()' class="btn active">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to handle subscribe button click
const subscribe = () => {
    event.target.classList.remove('active');
    event.target.style.background = '#ddd';
    event.target.style.color = 'black';
    event.target.setAttribute('disabled', true);
    event.target.innerText = "Subscribed";
}

// Function to load categories from API
const categoryApi = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(r => r.json())
        .then(data => myfunction(data.categories));
}

// Function to display categories
const myfunction = (categories) => {
    const CatagoryContainer = document.getElementById('category-container');
    categories.forEach(cat => {
        const div = document.createElement('div');
        div.innerHTML = `
            <button id='btn-${cat.category_id}' onclick="CatagoryFilter(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
        CatagoryContainer.appendChild(div);
    });
}

// Initialize categories
categoryApi();

// Event listener for search field
document.getElementById('ScarchField').addEventListener('keyup', (event) => {
    const input = event.target.value;
    console.log(input);
    videoApi(input);
});

// Function to show loader
const showLoader = () => {
    document.getElementById('loader').classList.remove('hidden');
    document.getElementById('video-container').classList.add('hidden');
}

// Function to hide loader
const hideLoader = () => {
    document.getElementById('loader').classList.add('hidden');
    document.getElementById('video-container').classList.remove('hidden');
}

// Function to load videos from API based on input
const videoApi = (input = '') => {
    showLoader();
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${input}`)
        .then(response => response.json())
        .then(data => {
            removeActive();
            document.getElementById('btn-all').classList.add('active');
            dynamicVideo(data.videos);
        });
}

// Function to filter videos by category
function CatagoryFilter(id) {
    showLoader();
    const urls = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    const cat_btn = document.getElementById(`btn-${id}`);
    removeActive();
    cat_btn.classList.add('active');

    fetch(urls)
        .then(res => res.json())
        .then(data => {
            dynamicVideo(data.category);
        });
}

// Function to display videos dynamically
function dynamicVideo(data) {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';

    if (data.length == 0) {
        videoContainer.innerHTML = `
            <div class="col-span-full flex flex-col items-center text-center gap-y-6 py-40">
                <div><img src="assets/img/Icon.png" alt="No Content Icon"></div>
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
                    <img class="rounded-md aspect-video w-full object-cover" src="${video.thumbnail}" alt="Video Thumbnail">
                    <span class="absolute bg-black text-white text-sm px-[6px] rounded-sm bottom-2 right-4">3hrs 56 min ago</span>
                </div>
                <div class="mt-2 flex gap-2">
                    <div><img class="w-8 aspect-square rounded-full" src="${video.authors[0].profile_picture}" alt="Author Image"></div>
                    <div class="px-1">
                        <h1 class="font-bold mb-2 text-sm md:text-[1.125rem]">${video.title}</h1>
                        <p class="flex gap-1 text-sm text-gray-600">${video.authors[0].profile_name}
                            <span>
                                ${video.authors[0].verified ? '<img class="w-6" src="https://img.icons8.com/?size=48&id=102561&format=png" alt="Verified Icon">' : ''}
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

// Initialize videos
videoApi();
