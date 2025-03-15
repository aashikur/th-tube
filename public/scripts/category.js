// Load Catagory Api

const categoryApi = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(r=>r.json())
    .then(data=> myfunction(data.categories))
}

  const  myfunction = (categories) =>{
    const CatagoryContainer = document.getElementById('category-container');
   
          categories.forEach(cat => {
            const button = document.createElement('button');
                  button.innerHTML = `
                  <button class="btn btn-sm  hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
                  `
            CatagoryContainer.appendChild(button);
  
          });

  }

categoryApi();
