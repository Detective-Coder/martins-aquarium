// declaring a variable and storing an array of fish objects in it
let fishCollection = [
  {
      name: "Bart",
      food: "Crustaceans",
      type: "Beta Fish",
      location: "Galapagos",
      length: 2
  },
  {
      name: "Fred",
      food: "Other Fish",
      type: "Fishy Fish",
      location: "Hawaii",
      length: 9
  },
  {
      name: "Wilma",
      food: "Hotdogs",
      type: "Orange Fish",
      location: "Atlantic Ocean",
      length: 10
  },
  {
    name: "Jeff",
    food: "Crustaceans",
    type: "Beta Fish",
    location: "Galapagos",
    length: 2
  },
  {
      name: "Sam",
      food: "Other Fish",
      type: "Fishy Fish",
      location: "Hawaii",
      length: 9
  },
  {
      name: "Betty",
      food: "Hotdogs",
      type: "Orange Fish",
      location: "Atlantic Ocean",
      length: 8
  }
];

// creating and exporting a function that will sort through the fishCollection array and return an array of fish that are divisible by 3
export const mostHolyFish = () => {
  // creating a new variable and setting it to an empty array, this will hold the fish that are divisible by 3
  const holyFish = [];

 // looping through the fishCollection array with for of loop, declaring a variable that will act as an index of the array
  for (const fish of fishCollection) {
    // a conditional statement that tests the length value of the index, it uses modulo to divid by 3 and ask 'does the remainder equal zero?'
    if (fish.length % 3 === 0) {
      // if the item at the current index is divisible by 3, then push that item onto the holyFish array we made earlier in the function
        holyFish.push(fish);
    }
  }
  // this will return the array after we've done everything we're going to do to it, without this return statement, we wouldn't get the info back from this function when we call it
  return holyFish
}

// creating and exporting another array, this time it checks the fishCollection array and returns a new array made up of fish that are divisible by five and not divisible by 3
export const soldierFish = () => {
  // 5, 10, 15, 20, 25, etc... fish
  const soldiers = [];

  // Only display multiples of 5
  for (const fish of fishCollection) {
    if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
        soldiers.push(fish);
    }
  }

  return soldiers
}

// creating and exporting another function, this function loops through the fishCollection and returns an array of fish that are not disible by 3 and not divisible by 5
export const nonHolyFish = () => {
  // Any fish not a multiple of 3 or 5
  const regularFish = [];

  // Only display nonmultiples of 3 or 5
  for (const fish of fishCollection) {
    if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
        regularFish.push(fish);
    }
  }

  return regularFish

}

// creating and exporting a function that returns a copy of the fishCollection array
export const useFish = () => {
  return fishCollection.slice()
}