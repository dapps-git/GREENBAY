/* ===================================================
   GREEN BAY NFC BUSINESS CARD INTERACTIVE SCRIPTS
   =================================================== */

document.addEventListener("DOMContentLoaded", () => {

  // 1. Entrance animation for the card box
  const card = document.querySelector(".card-box");
  if (card) {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px) scale(0.98)";
    card.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0) scale(1)";
    }, 80);
  }

  // 2. Ripple effect on interactive elements
  const rippleTargets = document.querySelectorAll(".web-card, .contact-item, .social-btn");
  rippleTargets.forEach(btn => {
    btn.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = e.clientX - rect.left - size / 2 + "px";
      ripple.style.top = e.clientY - rect.top - size / 2 + "px";
      ripple.classList.add("ripple-effect");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // 3. Subtle tilt hover effect on desktop
  if (window.innerWidth > 768 && card) {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(1000px) rotateX(${-y / 55}deg) rotateY(${x / 55}deg) translateY(-1px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  }

});