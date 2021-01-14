const locationCollection = [
  {
    name: "Madagascar"
  },
  {
    name: "Hawaii"
  },
  {
    name: "Iceland"
  },
  {
    name: "Greenland"
  }
];

export function useLocation() {
  return locationCollection.slice();
}