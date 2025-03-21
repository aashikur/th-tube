// Load Catagory Api

const categoryApi = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(r=>r.json())
    .then(data=> myfunction(data.categories))
}

  const  myfunction = (categories) =>{
    const CatagoryContainer = document.getElementById('category-container');
 
   
          categories.forEach(cat => {
            // console.log(cat.category_id); // return Category ID
            const div = document.createElement('div');
                  div.innerHTML = `
                  <button id='btn-${cat.category_id}' onclick="CatagoryFilter(${cat.category_id})" class="btn btn-sm  hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
                  `
            CatagoryContainer.appendChild(div);
  
          });

  }

categoryApi();
