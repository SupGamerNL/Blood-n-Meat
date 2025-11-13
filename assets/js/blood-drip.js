// blood-drip.js
document.addEventListener("DOMContentLoaded", () => {
  const dripContainer = document.createElement("div");
  dripContainer.classList.add("drip-container");
  document.body.appendChild(dripContainer);

  function createDrip(side = "left") {
    const drip = document.createElement("div");
    drip.classList.add("drip");
    drip.classList.add(side);

    // random start position and size
    drip.style.top = `${Math.random() * 80}vh`;
    drip.style.width = `${Math.random() * 6 + 3}px`;
    drip.style.height = `${Math.random() * 20 + 10}px`;
    drip.style.animationDuration = `${Math.random() * 2 + 2}s`;

    dripContainer.appendChild(drip);

    // remove drip after animation
    setTimeout(() => {
      drip.remove();
    }, 4000);
  }

  // spawn drips on both sides
  setInterval(() => createDrip("left"), 1200);
  setInterval(() => createDrip("right"), 1500);
});
