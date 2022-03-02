import React, { useState } from 'react'
import { useContext } from 'react'
import { recipeContext } from './context/recipeContext'
import Recipe from './Recipe'
import StyledForm from './styles/recipeForm.styled'
import { StyledRecipe } from './styles/recipe.styled'

function RecipeForm() {
  const [searchRecipe, setSearchRecipe] = useState('')
  const {recipe, query} = useContext(recipeContext)
  const [recipeType, setRecipeType] = recipe;
  const [queryType, setQueryType] = query;

  const handleChange = e => {
    setSearchRecipe(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    setQueryType(searchRecipe)
    setSearchRecipe('')
  }
  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
          <input type='text' placeholder = 'Search recipes here' value={searchRecipe} onChange = {handleChange}/>
          <button type='submit'>Search</button>
      </StyledForm>
      <StyledRecipe>
        {recipeType.map(item => <Recipe name = {item.recipe.label} ingredients = {item.recipe.ingredients} key = {item.recipe.calories} image = {item.recipe.image} calories = {item.recipe.calories}/>)}
      </StyledRecipe>
    </div>
  )
}

export default RecipeForm