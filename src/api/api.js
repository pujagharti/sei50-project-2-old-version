import axios from 'axios';
const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=da84782af61243d798ead659cf921e52&type=main%20course'

export const getFoodName = () => {
  return axios.get(`${url}`)
} 