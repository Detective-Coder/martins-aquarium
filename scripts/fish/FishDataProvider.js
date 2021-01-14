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
      length: 8
  },
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
      length: 8
  }
];

export const useFish = () => {
  return fishCollection.slice()
}