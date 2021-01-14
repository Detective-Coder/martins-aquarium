const tipCollection = [
  {
    name: "Salinity",
    tip1: "Keep it salty",
    tip2: "Just dump in some salt"
  },
  {
    name: "Temperature",
    tip1: "Very hot",
    tip2: "Basically boiling"
  },
  {
    name: "Care",
    tip1: "Do a care",
    tip2: "Really care for it"
  }
];

export function useTips() {
  return tipCollection.slice();
}

/* <h3>Salinity</h3>
<ul>
    <li>Keep it salty</li>
    <li>Just dump in some salt</li>
</ul>
<h3>Temperature</h3>
<ul>
    <li>Very hot</li>
    <li>Basically boiling</li>
</ul> */