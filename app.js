const pinContainer = document.getElementById("pin-container");

const pins = [
  {
    image: "images\\img.jpg",
    title: "Pinx 1",
    description: "This is pin 1 description"
  },
  {
    image: "images\\img.jpg",
    title: "Pin 2",
    description: "This is pin 2 description"
  },
  {
    image: "images\\img.jpg",
    title: "Pin 3",
    description: "This is pin 3 description"
  }
];

pins.forEach(pin => {
  const pinElement = document.createElement("div");
  pinElement.classList.add("pin");

  const imageElement = document.createElement("img");
  imageElement.src = pin.image;

  const detailsElement = document.createElement("div");
  detailsElement.classList.add("details");

  const titleElement = document.createElement("h2");
  titleElement.textContent = pin.title;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = pin.description;

  detailsElement.appendChild(titleElement);
  detailsElement.appendChild(descriptionElement);
  pinElement.appendChild(imageElement);
  pinElement.appendChild(detailsElement);
  pinContainer.appendChild(pinElement);
});