import axios from 'axios'

export const apiKey = 'da84782af61243d798ead659cf921e52'
export const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch'

export const getFoodName = () => {
  return axios.get(`${baseUrl}?apiKey=${apiKey}`)
  
}

export const getVegetarianRecipes = () => {
  return axios.get(`${baseUrl}?apiKey=${apiKey}&diet=vegetarian`)
  
}

console.log(getFoodName)
