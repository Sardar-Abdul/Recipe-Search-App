import { createContext, useEffect, useState } from "react";

export const recipeContext = createContext()


export const RecipeProvider = ({children}) => {
    const [recipe, setRecipe] = useState([])
    const [query, setQuery] = useState('mango')

    useEffect(() => {
        fetchRecipe()
    }, [query])
    
    const fetchRecipe = async() => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=9ecca66a&app_key=a6b04d461651e8d4e86509c32dc418a3`)
        const data = await response.json()
        setRecipe(data.hits)
        console.log(data.hits);
    }
    return (
        <recipeContext.Provider value={{recipe: [recipe, setRecipe], query: [query, setQuery]}}>
            {children}
        </recipeContext.Provider>
    )
}