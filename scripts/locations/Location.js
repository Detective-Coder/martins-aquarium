export function Location(location) {
  return `
    <div class="picture-container">
      <section>
        <img src="${location.image}" alt="Place Picture" height="300">
        <p>${location.name}</p>
      </section>
    </div>
  `
}

