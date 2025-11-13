document.addEventListener("DOMContentLoaded", () => {
  const overlayContainer = document.createElement("div");
  overlayContainer.style.position = "absolute";
  overlayContainer.style.top = "0";
  overlayContainer.style.left = "0";
  overlayContainer.style.width = "100%";
  overlayContainer.style.height = "100%";
  overlayContainer.style.pointerEvents = "none";
  overlayContainer.style.zIndex = "0";
  document.body.appendChild(overlayContainer);

  function createDrip() {
    const drip = document.createElement("div");
    drip.style.position = "absolute";
    drip.style.width = `${Math.random() * 4 + 2}px`; // 2-6px width
    drip.style.height = `${Math.random() * 60 + 30}px`; // 30-90px height
    drip.style.background = `rgba(255, ${Math.floor(Math.random()*50)}, ${Math.floor(Math.random()*50)}, 0.15)`;
    drip.style.left = `${Math.random() * 95}%`;
    drip.style.top = `0`;
    drip.style.borderRadius = "50%";
    drip.style.filter = "blur(1px)";
    overlayContainer.appendChild(drip);

    // Animate drip
    drip.animate([
      { transform: "translateY(0)" },
      { transform: `translateY(${window.innerHeight}px)` }
    ], {
      duration: Math.random() * 8000 + 7000, // 7-15s
      iterations: Infinity
    });
  }

  for (let i = 0; i < 15; i++) createDrip(); // create multiple drips
});
