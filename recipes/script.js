const container = document.getElementById("recipeContainer")
const searchInput = document.getElementById("searchInput")

function starRating(rating){
    let stars = ""
    const fullStars = Math.floor(rating)

    for(let i=0;i<5;i++){
        stars += i < fullStars ? "⭐" : "☆"
    }

    return stars
}

function recipeCard(recipe){

    return `
    <div class="recipe-card">

        <img src="${recipe.image}" alt="${recipe.name}">

        <div class="recipe-info">

            <span class="tag">${recipe.tags.join(", ")}</span>

            <h2>${recipe.name}</h2>

            <span class="rating">${starRating(recipe.rating)}</span>

            <p class="description">
                ${recipe.description}
            </p>

        </div>

    </div>
    `
}

function displayRecipes(list){
    container.innerHTML = ""

    list.forEach(recipe=>{
        container.innerHTML += recipeCard(recipe)
    })
}

function showRandomRecipe(){
    const randomIndex = Math.floor(Math.random() * recipes.length)
    displayRecipes([recipes[randomIndex]])
}

function searchRecipes(keyword){

    keyword = keyword.toLowerCase()

    const filtered = recipes.filter(recipe => {

        const name = recipe.name.toLowerCase()
        const description = recipe.description.toLowerCase()
        const tags = recipe.tags.join(" ").toLowerCase()

        return (
            name.includes(keyword) ||
            description.includes(keyword) ||
            tags.includes(keyword)
        )
    })

    filtered.sort((a,b)=> a.name.localeCompare(b.name))

    displayRecipes(filtered)
}

searchInput.addEventListener("input", (e)=>{

    const value = e.target.value.trim()

    if(value === ""){
        showRandomRecipe()
    } else {
        searchRecipes(value)
    }

})

showRandomRecipe()