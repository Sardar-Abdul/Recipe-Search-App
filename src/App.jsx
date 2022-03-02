import React from 'react'
import RecipeForm from './components/RecipeForm'
import Header from './components/Header'
import  AppStyle from './components/styles/app.styled'
import { RecipeProvider } from './components/context/recipeContext'

function App() {
  return (
    <RecipeProvider>
      <AppStyle>
        <Header />
        <RecipeForm />
      </AppStyle>
    </RecipeProvider>
  )
}

export default App