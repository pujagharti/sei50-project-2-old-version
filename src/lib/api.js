import axios from 'axios'


const token = process.env.REACT_APP_KEY

export const apiKey = 'da84782af61243d798ead659cf921e52'
export const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch'
export const searchUrl = 'https://api.spoonacular.com/recipes/search/'

export const singularUrl = 'https://api.spoonacular.com/recipes/'



export const getFoodName = () => {
  return axios.get(`${baseUrl}?apiKey=${apiKey}`)
}

export const getDessert = () => {
  return axios.get(`${searchUrl}?diet=dessert&apiKey=${apiKey}`)
}

export const getVeganRecipes = () => {
  return axios.get(`${baseUrl}?apiKey=${apiKey}&diet=vegan`)
  
}

export const getKeto = () => {
  return axios.get(`${baseUrl}?apiKey=${apiKey}&diet=keto`)
}

export const getSingular = (id) => {
  return axios.get(`${singularUrl}/${id}/information?apiKey=${apiKey}`)
}

export const getByType = (type) => {
  return axios.get(`${singularUrl}/complexSearch?type=${type}&apiKey=${apiKey}`)
}