const locationCollection = [
  {
    name: "Madagascar",
    image: "https://www.telegraph.co.uk/content/dam/Travel/2017/june/madagascar-miavana.jpg"
  },
  {
    name: "Hawaii",
    image: "https://www.telegraph.co.uk/content/dam/Travel/2017/june/madagascar-miavana.jpg"
  },
  {
    name: "Iceland",
    image: "https://www.telegraph.co.uk/content/dam/Travel/2017/june/madagascar-miavana.jpg"
  },
  {
    name: "Greenland",
    image: "https://www.telegraph.co.uk/content/dam/Travel/2017/june/madagascar-miavana.jpg"
  }
];

export function useLocation() {
  return locationCollection.slice();
}