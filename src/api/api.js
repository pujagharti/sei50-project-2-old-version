import axios from 'axios';



export const getFoodName = () => {
  return axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=da84782af61243d798ead659cf921e52&type=main%20course')
}

export const getCuisines = () => {
  return axios.get(`https://api.spoonacular.com/recipes/?apiKey=da84782af61243d798ead659cf921e52`)
}
