export function Tips(tip) {
  return `
    <section class="tip-card">
    <h3>${tip.name}</h3>
      <ul>
        <li>${tip.tip1}</li>
        <li>${tip.tip2}</li>
      </ul>
    </section> 
  `
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
