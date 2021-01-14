import { useFish } from './FishDataProvider.js'
import {Fish} from "./Fish.js"

let fishContainer = document.querySelector("#fish-list");
export function FishList() {
  const allTheFish = useFish()

  for (const fish of allTheFish) {
    fishContainer.innerHTML += Fish(fish);
  }
}