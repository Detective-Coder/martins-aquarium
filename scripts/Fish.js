export function Fish(fish) {
  return `
  <section class="fish-card">
    <img src="https://static.wikia.nocookie.net/pixar/images/1/1f/Dory-white.jpg" alt="Fish" height="250">
    <ul>
      <li>${fish.name}</li>
      <li>${fish.length}</li>
      <li>${fish.type}</li>
      <li>${fish.location}</li>
      <li>${fish.food}</li>
    </ul>
  </section>
  `;
}