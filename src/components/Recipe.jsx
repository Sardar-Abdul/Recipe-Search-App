import React from 'react'
import StyledMainRecipe from './styles/mainRecipe.styled'

function recipe({name, calories, image, ingredients}) {
  return (
    <StyledMainRecipe>
      <h1>{name}</h1>
      <h3>Ingredients:</h3>
          {ingredients.map(item => (
            <li key = {item.label}>{item.text}</li>
          ))}
      <img src={image} alt=''/>
      <p>Calories: {calories.toFixed(2)}</p>
    </StyledMainRecipe>
  )
}

export default recipe