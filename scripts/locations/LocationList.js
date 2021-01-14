import {useLocation} from "./LocationDataProvider.js";
import {Location} from "./Location.js";

let locationContainer = document.querySelector("#location-list");

export function LocationList() {
  const allTheLocations = useLocation();

  let locationListHTMLString = "";

  for(let i = 0; i < allTheLocations.length; i++) {
    locationListHTMLString += Location(allTheLocations[i]);
  }

  locationContainer.innerHTML = `${locationListHTMLString}`;
}