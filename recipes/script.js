const recipes = [
{
name: "Apple Crisp",
tag: "dessert",
rating: 4,
description:
"This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
image: "images/apple_crisp.jpg"
},
{
name: "Chicken Alfredo",
tag: "dinner",
rating: 5,
description: "Creamy pasta with chicken and parmesan cheese.",
image: "images/chicken_alfredo.jpg"
},
{
name: "Greek Salad",
tag: "healthy",
rating: 4,
description: "Fresh vegetables with feta cheese and olives.",
image: "images/greek_salad.jpg"
}
]

const container = document.getElementById("recipeContainer")
const searchInput = document.getElementById("searchInput")

function getStars(rating){
let stars = ""
for(let i=0;i<5;i++){
stars += i < rating ? "⭐" : "☆"
}
return stars
}

function createRecipeCard(recipe){

return `
<div class="recipe-card">

<img src="${recipe.image}" alt="${recipe.name}">

<div class="recipe-info">

<span class="tag">${recipe.tag}</span>

<h2>${recipe.name}</h2>

<span class="rating">${getStars(recipe.rating)}</span>

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
container.innerHTML += createRecipeCard(recipe)
})
}

function showRandomRecipe(){
const random = recipes[Math.floor(Math.random()*recipes.length)]
displayRecipes([random])
}

function searchRecipes(keyword){

keyword = keyword.toLowerCase()

const results = recipes.filter(recipe =>
recipe.name.toLowerCase().includes(keyword) ||
recipe.description.toLowerCase().includes(keyword) ||
recipe.tag.toLowerCase().includes(keyword)
)

results.sort((a,b)=>a.name.localeCompare(b.name))

displayRecipes(results)
}

searchInput.addEventListener("input",(e)=>{
const value = e.target.value.trim()

if(value === ""){
showRandomRecipe()
}else{
searchRecipes(value)
}
})

showRandomRecipe()