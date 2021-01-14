import {useTips} from "./TipDataProvider.js";
import {Tips} from "./Tip.js";

let tipContainer = document.querySelector("#tip-container");

export function TipList() {
  const allTheTips = useTips();

  let tipListHTMLString = "";

  for(let i = 0; i < allTheTips.length; i++) {
    tipListHTMLString += Tips(allTheTips[i]);
  }
  tipContainer.innerHTML = `${tipListHTMLString}`;
}