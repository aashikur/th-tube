// Load Catagory Api

const categoryApi = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(r=>r.json())
    .then(data=> myfunction(data))
}


  const  myfunction = (data) =>{
    const categories = document.getElementById('category-container');
    categories.innerHTML = '';
    

          data.categories.forEach(category => {
            // console.log(category.category);
            // console.log(category.category_id == 1001)
            const button = document.createElement('button');
            button.classList.add('btn','btn-sm');
           
            if(category.category_id == 1001)
              button.classList.add('bg-[#FF1F3D]','text-white');

          
  
  
            button.innerText = category.category;
            categories.appendChild(button);
  
          });

  }

categoryApi();
