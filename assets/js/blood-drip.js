// blood-drip.js
document.addEventListener("DOMContentLoaded", () => {
  const dripContainer = document.createElement("div");
  dripContainer.classList.add("drip-container");
  dripContainer.style.zIndex = "-1";
  document.body.appendChild(dripContainer);

  // Helper: create a new blood drip
  function createDrip(side = "left") {
    const drip = document.createElement("div");
    drip.classList.add("drip", side);

    // Random Y spawn position (not top only)
    const topOffset = Math.random() * 80; // between 0% and 80% of viewport height
    drip.style.top = `${topOffset}vh`;

    // Random X offset near side (but not touching it)
    let horizontalOffset;
    if (side === "left") {
      horizontalOffset = Math.random() * 8 + 4; // 4vw–12vw from left edge
      drip.style.left = `${horizontalOffset}vw`;
    } else {
      horizontalOffset = Math.random() * 8 + 4; // 4vw–12vw from right edge
      drip.style.right = `${horizontalOffset}vw`;
    }

    // Random dimensions + animation speed
    const size = Math.random() * 6 + 3; // 3–9px width
    drip.style.width = `${size}px`;
    drip.style.height = `${size * 4}px`;
    drip.style.animationDuration = `${Math.random() * 2 + 2.5}s`;

    dripContainer.appendChild(drip);

    // Remove after falling
    setTimeout(() => drip.remove(), 5000);
  }

  // Intervals: spawn varying drips from both sides
  setInterval(() => createDrip("left"), 1300);
  setInterval(() => createDrip("right"), 1600);

  // Optional: adaptive density for smaller devices
  const mq = window.matchMedia("(max-width: 600px)");
  if (mq.matches) {
    clearInterval(); // disable old intervals (prevent double spawns)
    setInterval(() => createDrip("left"), 2200);
    setInterval(() => createDrip("right"), 2500);
  }
});
