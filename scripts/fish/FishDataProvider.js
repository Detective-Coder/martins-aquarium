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

export const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  const holyFish = [];

 // Only display multiples of 3
  for (const fish of fishCollection) {
    if (fish.length % 3 === 0) {
        holyFish.push(fish);
    }
  }

  return holyFish
}

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


export const useFish = () => {
  return fishCollection.slice()
}