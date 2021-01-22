import { useFish, mostHolyFish, soldierFish, nonHolyFish } from './FishDataProvider.js'
import {Fish} from "./Fish.js"

// declaring a new variable and storing a reference to the dom element with the id of fish-list
let fishContainer = document.querySelector("#fish-list");

// creating a new function to build some fishlist html, and giving it a parameter 
function buildFishListHTML(fishCollection) {
  // declaring a new variable to hold the final product and setting that to an empty string
  let fishListHTML = "";

  // looping through whatever argument we use when we call the function
  for(let i = 0; i < fishCollection.length; i++) {
    // with each iteration through our argument, we call the Fish function, give it an argument that matches the argument we used when we called this function, run that Fish function on the current index of the argument, and then store all that information in our variable 
    fishListHTML += Fish(fishCollection[i]);
  }
  // we return that variable full of all the info
  return fishListHTML;
}

// we export and create a function that takes everything we've done up to this point and puts it all together the way we want it
export function FishList() {
  // calling the imported functions, which return the arrays we made in FishDataProvider.js, we store the values in new variables that we are declaring
  const holyFishCollection = mostHolyFish()
  const soldierFishCollection = soldierFish()
  const nonHolyFishCollection = nonHolyFish()


  // now we are calling the function that we made to build our html, and we're passing in the arguments above that store the arrays of different types of fish
  const holyFishHTML = buildFishListHTML(holyFishCollection)
  const soldierFishHTML = buildFishListHTML(soldierFishCollection)
  const nonHolyFishHTML = buildFishListHTML(nonHolyFishCollection)

  // fishContainer contains a reference to the dom element, we write into the html with these html tags, and we also interpolate the variables we just made that contain the lists of fish
  fishContainer.innerHTML = `
  <h2>My Fish</h2>
  <section>
    ${holyFishHTML}
    ${soldierFishHTML}
    ${nonHolyFishHTML}
  </section>`

}